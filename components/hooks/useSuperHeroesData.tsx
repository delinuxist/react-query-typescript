import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { clearPreviewData } from "next/dist/server/api-utils";
import axios from "../api/axios";
import { FetchSuperheroes } from "../api/fetchSuperheroes";

type DataType = {
  id: number,
  name: string,
  alterEgo: string,
}
const addSuperHero = (hero: object)=> {
return axios.post(`/superheroes`,hero);
}

export const useSuperHeroesData = (onSuccess: any,onError: any)=> {
 return useQuery({queryKey:["super-heroes"],queryFn: FetchSuperheroes,onSuccess,onError});
}

export const useAddSuperHeroData = ()=> {
  const queryClient = useQueryClient();
  return useMutation({mutationFn: addSuperHero,
  //   onSuccess: (data)=> {
  //   console.log(data.data)
  //   // queryClient.invalidateQueries({queryKey: ["super-heroes"]});
  //   queryClient.setQueryData(["super-heroes"],(oldQueryData: any)=>{
  //     console.log(oldQueryData)
  //     return [...oldQueryData,data.data]
  //   });
      
  // }
  onMutate: async (newHero)=> {
    await queryClient.cancelQueries(["super-heroes"]);
    const previousData = queryClient.getQueryData(["super-heroes"]);
    queryClient.setQueryData(["super-heroes"],(oldQueryData: any)=>{
      return [...oldQueryData,{id: oldQueryData.length +1, ...newHero}]
    })
    return previousData;
  },
  onError: (_,__,context:any)=> {
    queryClient.setQueryData(["super-heroes"],context.previousData)
  },
  onSettled: ()=> {
    queryClient.invalidateQueries(["super-heroes"]);
  }
});
}



