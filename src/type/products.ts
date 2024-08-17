import { TMeta } from './paginations';

export type TProduct = {
  id: number;
  name: string;
  price: number;
};

export type TProductResponse = {
  data: TProduct[];
  meta: TMeta;
};