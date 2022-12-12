import axios from "./axios"

interface Data {
  id: number,
  name: string,
  alterEgo: string
}

export const SingleHero =async (id: any):Promise<Data>=> {
  const {data} =  await axios.get(`/superheroes/${id}`)
  return data
}