export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export interface ReviewsData {
  lastUpdated: string;
  rating: number;
  totalCount: number;
  profileUrl: string;
  reviews: Review[];
}

import reviewsJson from "./reviews.json";
export const reviewsData: ReviewsData = reviewsJson;
