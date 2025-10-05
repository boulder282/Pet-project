export type Categories = ProductsCategory[];

export interface ProductsCategory {
  id?: string;
  name: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
}
