import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useAppStore } from '../store'


export default function Home() {
  const [products, cars, addCar, clearProducts] = useAppStore((state) => [state.products, state.cars, state.addCar, state.clearProducts])
  const [car, setCar] = useState("");
  return (
    <div className='flex mt-2 '>
      <div className='w-[100%] flex'>
        <div className='w-[100%]'>
          <h1>Products</h1>
          {products.length == 0 ? "No data" : products.map((item) => <h1 key={item.id}>{item.title}</h1>)}
        </div>
        <div className='w-[100%]'>
          <h1>Cars</h1>
          {cars.length == 0 ? "No data" : cars.map((item, i) => <h1 key={i}>{item}</h1>)}
        </div>
      </div>
      <div className={`w-[100%] space-y-3`}>
        <button onClick={clearProducts} className={` bg-green-400 rounded-md px-3 cursor-pointer `} >clear Button</button>
        <div>
          <input onChange={(e) => { setCar(e.target.value) }
          } value={car} type="text" className='w-[30%] h-8 border px-3 rounded-lg' placeholder='Add product' />
          <div className='mt-2 '>
            <button className={` bg-green-400 rounded-md px-3 cursor-pointer `} onClick={() => {
              addCar(car);
              setCar("")
            }}>Submit</button>
          </div>

        </div>
      </div>
    </div>
  )
}
