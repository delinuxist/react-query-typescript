import { useQuery } from "@tanstack/react-query";
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

  const {data} = useQuery({queryKey: ["hero",heroId],queryFn: ()=>SingleHero(heroId)});


  console.log(data)
  return (<div>
    <h1>Super Hero Details</h1>
    <div>
      <h1>{data?.data.alterEgo }</h1>
    </div>
  </div>)
}

export default HeroDetails;

