import * as fs from "fs";
import * as path from "path";

const PROFILE_URL = "https://profi.ru/profile/CherkovskiySV/";
const OUTPUT_PATH = path.join(__dirname, "../src/data/reviews.json");

interface ProfiReviewNode {
  id: string;
  mark: string;
  author: string;
  textHTML: string;
  date: {
    timestamp: number;
    relativeDate: string;
  };
  services?: {
    main?: Array<{ name: string }>;
  };
}

interface ReviewsOutput {
  lastUpdated: string;
  rating: number;
  totalCount: number;
  profileUrl: string;
  reviews: {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
    service: string;
  }[];
}

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)))
    .trim();
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

async function fetchReviews(): Promise<void> {
  console.log("Fetching profile page...");

  const response = await fetch(PROFILE_URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  console.log(`Fetched ${html.length} bytes`);

  // Find __NEXT_DATA__
  const scriptMatch = html.match(
    /<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/
  );

  if (!scriptMatch) {
    throw new Error("Could not find __NEXT_DATA__ script");
  }

  const nextData = JSON.parse(scriptMatch[1]);
  const pageProps = nextData.props?.pageProps;

  if (!pageProps) {
    throw new Error("Could not find pageProps");
  }

  // Get profile rating from microdata or profile
  let rating = 5.0;
  let totalCount = 0;

  if (pageProps.profile?.rating) {
    rating = pageProps.profile.rating;
  }

  // Find reviews in dehydratedState
  const dehydrated = pageProps.dehydratedState;
  const reviews: ProfiReviewNode[] = [];

  if (dehydrated?.queries) {
    for (const query of dehydrated.queries) {
      const queryKey = JSON.stringify(query.queryKey);

      if (queryKey.includes("FullProfileReviews")) {
        console.log("Found FullProfileReviews query");

        const pages = query.state?.data?.pages;
        if (pages && Array.isArray(pages)) {
          for (const page of pages) {
            // Navigate to pxf.profile.reviews.edges
            const reviewsData = page?.pxf?.profile?.reviews;

            if (reviewsData) {
              if (reviewsData.totalCount) {
                totalCount = reviewsData.totalCount;
              }

              if (reviewsData.edges && Array.isArray(reviewsData.edges)) {
                for (const edge of reviewsData.edges) {
                  if (edge.node) {
                    reviews.push(edge.node);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Also check adaptiveReviews in pageProps
  if (reviews.length === 0 && pageProps.adaptiveReviews?.edges) {
    console.log("Using adaptiveReviews from pageProps");
    for (const edge of pageProps.adaptiveReviews.edges) {
      if (edge.node) {
        reviews.push(edge.node);
      }
    }
    if (pageProps.adaptiveReviews.totalCount) {
      totalCount = pageProps.adaptiveReviews.totalCount;
    }
  }

  // Calculate rating from marks if not set
  if (rating === 5.0 && reviews.length > 0) {
    const sum = reviews.reduce((acc, r) => acc + parseInt(r.mark, 10), 0);
    rating = Math.round((sum / reviews.length) * 100) / 100;
  }

  console.log(`Extracted ${reviews.length} reviews, rating: ${rating}, total: ${totalCount}`);

  if (reviews.length === 0) {
    // Save debug HTML
    const debugPath = path.join(__dirname, "../debug-profi.html");
    fs.writeFileSync(debugPath, html);
    console.log(`Saved debug HTML to ${debugPath}`);
    throw new Error("No reviews found. Check debug-profi.html");
  }

  // Format output
  const output: ReviewsOutput = {
    lastUpdated: new Date().toISOString(),
    rating,
    totalCount: totalCount || reviews.length,
    profileUrl: PROFILE_URL,
    reviews: reviews.slice(0, 20).map((r) => ({
      id: r.id,
      author: r.author || "Клиент",
      rating: parseInt(r.mark, 10) || 5,
      text: stripHtml(r.textHTML || ""),
      date: r.date?.timestamp ? formatDate(r.date.timestamp) : r.date?.relativeDate || "",
      service: r.services?.main?.[0]?.name || "Ремонт стиральных машин",
    })),
  };

  // Ensure directory exists
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
  console.log(`Saved ${output.reviews.length} reviews to ${OUTPUT_PATH}`);
  console.log("\nFirst review:", output.reviews[0]);
}

fetchReviews().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
