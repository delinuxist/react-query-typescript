import { useInfiniteQuery } from "@tanstack/react-query"
import { Fragment, useState } from "react"
import { FetchColors } from "../components/api/fetchColors"


const InfiniteQueries = ()=> {
 
  const {data,isError,isLoading,isFetching,hasNextPage,fetchNextPage} = useInfiniteQuery({queryKey: ["colors"],queryFn: FetchColors,getNextPageParam: (_lastpage,pages)=>{
    if(pages.length < 5){
      return pages.length + 1;
    }else{
      return undefined;
    }
  }})

  console.log(data)

if(isLoading){
  return (<div>.....Loading</div>)
}

if(isError){
  return (<div>Something happened</div>)
}
  return (
    <div>
      <h1>Infinite Queries</h1>
      <div>
        {data?.pages.map((group,i)=> {
          return(
            <Fragment key={i}>
              {group.map((color:any)=> <li key={color.id}>{color.id}: {color.label}</li>)}
            </Fragment>
          )
        }
        )}
      </div>
       <button onClick={()=> fetchNextPage()} className="p-2 ml-2 bg-green-400" disabled={!hasNextPage}>Load More</button>
       <div>{isFetching ? "Loading....": null}</div>
     
    </div>
  )
}

export default InfiniteQueries;