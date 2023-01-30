
export interface Store {
  products: Product[];
  cars: string[];
  addCar: (car: string) => void;
  addAllProducts: (product: Product[]) => void;
  addProduct: (product: Product)=> void;
  clearProducts: ()=> void;
}



export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductData {
  products: Product[]
  total: number;
  skip: number;
  limit: number;
}

