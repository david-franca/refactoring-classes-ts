export interface FoodType {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface FoodForm {
  name: string;
  description: string;
  price: string;
  image: string;
}
