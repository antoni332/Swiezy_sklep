export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  unit: Unit;
  stock: number;
  categoryId: number;
}

export type Unit = "kg" | "g" | "ml" | "l" |"szt";
