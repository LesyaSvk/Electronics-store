import { ProductTypeEnum } from './filters.model';

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  type: ProductTypeEnum;
  description: string;
  imageUrl: string;
  reviews: ProductReview[];
}

export interface ProductReview {
  user: string;
  comment: string;
  rating: number;
}
