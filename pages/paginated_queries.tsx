import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FetchColors } from "../components/api/fetchColors";


const PaginatedQueries = ()=> {
  const [page,setPage]= useState(1);

const {data,isError,isLoading,isFetching} = useQuery({queryKey: ["colors",page],queryFn:()=> FetchColors({pageParam: page}),keepPreviousData: true})

if(isLoading){
  return (<div>.....Loading</div>)
}

if(isError){
  return (<div>Something happened</div>)
}
  return (
    <div>
      <h1>Paginated Queries</h1>
      <div>
        {data.map((color: any)=> <li key={color.id}>
          {color.label}
        </li>)}
      </div>
        {isFetching ? "Loaging...": 
         <div className="mt-4 space-x-2">
        <button className="p-2 bg-green-400 rounded-md" onClick={()=> setPage(page => page-1)} disabled={page === 1}>Prev</button>
        <button className="p-2 bg-green-400 rounded-md" onClick={()=> setPage(page=> page + 1)} disabled={page === 5}>Next</button>
        </div>
        }
     
    </div>
  )
}

export default PaginatedQueries;