import { dehydrate, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import * as React from 'react';
import { axiosDummy } from '../components/api/axios';
import { useAppStore } from '../store';
import { Product, ProductData } from '../store/types';
import { queryClient } from './_app';

type Props = {

}

const getProducts = async (): Promise<ProductData> => {
  return axiosDummy.get("/products").then((res: AxiosResponse<ProductData | any>) => {

    return res.data;
  })
}

export default function Zustand() {
  const [allProducts, addAllProducts] = useAppStore((state) => [state.products, state.addAllProducts])
  const { data: products, isFetching, isLoading } = useQuery<ProductData>({
    queryKey: ["products"], queryFn: getProducts, onSuccess: (value) => {
      addAllProducts(value.products);
    }
  })

  console.log("Fetching", isFetching)
  console.log("Loading", isLoading)
  if (isLoading) {
    return <h1>Loading</h1>
  }
  return (
    <div>
      {products?.products.map((product) => <h1 key={product.id}>{product.title}</h1>)}
      <h2 className='bg-gray-600'>Zustand state</h2>
      {/* <div>
        {allProducts.map((item) => <h1 key={item.id}>{item.title}</h1>)}
      </div> */}
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {

  await queryClient.prefetchQuery({
    queryKey: ["products"], queryFn: getProducts
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
