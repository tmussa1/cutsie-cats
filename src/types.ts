export type CatImage = {
  id: string;
  height: number;
  width: number;
  url: string;
};

export type CatBreed = {
  name: string;
  temperament: string;
  origin: string;
  description: string;
  life_span: string;
  indoor: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  hypoallergenic: number;
};

export const CAT_BREED_KEYS = {
  name: true,
  temperament: true,
  origin: true,
  description: true,
  life_span: true,
  indoor: true,
  alt_names: true,
  adaptability: true,
  affection_level: true,
  child_friendly: true,
  dog_friendly: true,
  energy_level: true,
  grooming: true,
  health_issues: true,
  intelligence: true,
  shedding_level: true,
  social_needs: true,
  stranger_friendly: true,
  vocalisation: true,
  experimental: true,
  hairless: true,
  natural: true,
  rare: true,
  rex: true,
  suppressed_tail: true,
  short_legs: true,
  hypoallergenic: true,
} satisfies Record<keyof CatBreed, true>;
