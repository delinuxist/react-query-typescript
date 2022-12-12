import { useQuery,useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next"
import  { useRouter } from "next/router"
import { useEffect } from "react";
import { SingleHero } from "../components/api/singleHero";


const HeroDetails:NextPage =()=>{
  const router= useRouter();
  const isReady = router.isReady;
  let heroId: any;
  if(isReady){
    heroId = router.query.heroId;
  }
  const queryClient = useQueryClient();

  const {data: hero,isLoading} = useQuery({queryKey: ["hero",heroId],queryFn: ()=>SingleHero(heroId),});


  if(isLoading){
    return <h1>...Loading</h1>
  }
  return (<div>
    <h1>Super Hero Details</h1>
    <div>
      <h1>{hero?.alterEgo }</h1>
    </div>
  </div>)
}

export default HeroDetails;



// initialData: (): any => {
//   const hero = queryClient.getQueryData(['super-heroes'])?.data?.find((hero: any)=> hero.id === parseInt(heroId))
// }