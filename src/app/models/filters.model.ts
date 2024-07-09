export interface ProductFilter {
  priceRange?: PriceRange | null;
  name: string;
  type: ProductTypeEnum | null;
}

export interface PriceRange {
  min: number;
  max: number;
}

export enum ProductTypeEnum {
  ALL = 'All',
  TVS = 'TVs',
  APPLIANCE = 'Appliances',
  PHONES = 'Phones',
  VIDEOGAMES = 'Video Games',
  AUDIO = 'Audio',
}

export interface PriceRangeOptions {
  label: string;
  selected: boolean;
  range: number[];
}
