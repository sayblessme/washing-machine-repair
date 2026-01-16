export interface Brand {
  slug: string;
  name: string;
  nameLower: string;
}

export const brands: Brand[] = [
  { slug: "bosch", name: "Bosch", nameLower: "Bosch" },
  { slug: "lg", name: "LG", nameLower: "LG" },
  { slug: "samsung", name: "Samsung", nameLower: "Samsung" },
  { slug: "indesit", name: "Indesit", nameLower: "Indesit" },
  { slug: "ariston", name: "Ariston", nameLower: "Ariston" },
  { slug: "electrolux", name: "Electrolux", nameLower: "Electrolux" },
  { slug: "beko", name: "Beko", nameLower: "Beko" },
  { slug: "whirlpool", name: "Whirlpool", nameLower: "Whirlpool" },
  { slug: "candy", name: "Candy", nameLower: "Candy" },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

export function getAllBrandSlugs(): string[] {
  return brands.map((brand) => brand.slug);
}
