import { create } from "zustand";
import {devtools,persist,createJSONStorage,} from 'zustand/middleware'
import { Product, Store } from "./types";


export const useAppStore = create<Store>()(
  devtools(
  persist(
    (set)=> ({
      products: [],
      cars: [],
      addCar: (car: string) => set((state)=> ({cars: [...state.cars,car]})),
      addAllProducts : (product: Product[]) => set(()=> ({products: product})),
      addProduct: (product: Product) => set((state) => ({ products: [...state.products, product] })),
      clearProducts: () => set(()=> ({products: []}))
    })
    ,{
      name: "products",
      storage: createJSONStorage(()=> sessionStorage),
    }
  )
  )
 )