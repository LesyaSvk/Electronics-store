export interface ProductFilter {
  priceRanges: [number, number][];
  name: string;
  type: ProductTypeEnum;
  pagination: PageFilter;
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

export interface PageFilter {
  page: number;
  size: number;
}
