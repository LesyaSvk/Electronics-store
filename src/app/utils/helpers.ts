import { ProductTypeEnum } from '../models';

export function enumToArray(enumObj: Record<string, string>): string[] {
  return Object.keys(enumObj).map((key) => enumObj[key]);
}

export function composePriceFilterParams(ranges: number[][]): string {
  return ranges
    ? ranges
        .map((range) => `price_gte=${range[0]}&price_lte=${range[1]}&`)
        .join('')
    : '';
}

export function composeNameFilterParams(name: string): string {
  return `name_like=${name}&`;
}

export function composeTypeFilterParams(type: ProductTypeEnum): string {
  return `type_like=${type}&`;
}
