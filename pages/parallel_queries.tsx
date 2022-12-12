import { useQuery } from "@tanstack/react-query";
import { FetchFriends } from "../components/api/fetchFriends";
import { FetchSuperheroes } from "../components/api/fetchSuperheroes";


const ParallelQueries = ()=> {
  const {data: superHeroes} = useQuery({queryKey:["super-heroes"],queryFn: FetchSuperheroes})
  const {data: friends} = useQuery({queryKey: ["friends"],queryFn: FetchFriends})
  return (
    <div>
      <h1>Prallel Queries</h1>
      <div className="grid grid-cols-2 mt-4 ">
        <div>
          <h1>SuperHeroes</h1>
          <div className="mt-2">
            {friends.map((friend:any)=> <li key={friend.id}>
              {friend.name}
            </li>)}
          </div>
        </div>
        <div>
          <h1>Friends</h1>
          <div className="mt-2">
            {superHeroes.map((hero:any)=> <li key={hero.id}>
              {hero.name}
            </li>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParallelQueries;