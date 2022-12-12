import { link } from "fs";
import { useState } from "react";
import { useAddSuperHeroData, useSuperHeroesData } from "../components/hooks/useSuperHeroesData";


const AddHero = ()=> {
  const [name,setName]= useState('');
  const [alterEgo,setAlterEgo] = useState('');

const onSuccess = ()=> {

}

const onError = ()=> {

}
  const {data,isLoading,isError,refetch} = useSuperHeroesData(onSuccess,onError);

  const {mutate} = useAddSuperHeroData()

  const addHero =()=> {
    const hero = {
      name,alterEgo
    }
    mutate(hero);
    setAlterEgo("");
    setName("");
  }


  return (<div>
    <h1>Add Hero</h1>
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" className="h-8 px-1 border" placeholder="Input Name" value={name} onChange={(e)=> setName(e.target.value)}/>
      <label htmlFor="alterEgo" className="ml-3 ">AlterEgo</label>
      <input type="text" className="h-8 px-1 border" placeholder="Input AlterEgo" value={alterEgo} onChange={(e)=> setAlterEgo(e.target.value)}/>
      <button className="p-2 ml-3 text-white bg-blue-400 rounded-md" onClick={addHero}>Add Hero</button>
    </div>
    <button onClick={()=> refetch()} className="p-2 mt-2 text-white bg-green-400 rounded-md">Fetch Heroes</button>
    <div>
      {data?.map((hero: any)=> <li key={hero.id}>{hero.name}</li>)}
    </div>
  </div>)
}


export default AddHero;