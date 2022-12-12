import Link from "next/link";
import {useSuperHeroesData} from "../components/hooks/useSuperHeroesData";

type dataType ={
  id: number;
  name:string;
  alterEgo: string;
}

const Superheroes = ()=> {
  const onSuccess = (data:dataType[])=> {
    const lenght:number= data.length;
    console.log(lenght)
  }

  const onError = (error: any) => {
    console.log("Error...Something happened", error)
  }

  const {data,isLoading,isError,refetch,isFetching} =  useSuperHeroesData(onSuccess,onError);
  if( isFetching){
    return <h2>Is Loading</h2>
  }
  if(isError){
    return <h2>Error</h2>
  }

  return (<div>
    <h1>Superheroes</h1>
    {/* <button className="p-3 ml-2 bg-blue-300 rounded-md" onClick={()=> refetch()}>Fetch</button> */}
      <div>
        {data?.map((item:dataType,index: number)=> 
        <Link key={index} href={`/${item.id}`}>
        <li>
          {item.name}
        </li>
        </Link>
        )}
      </div>
  </div>)
}


export default Superheroes;