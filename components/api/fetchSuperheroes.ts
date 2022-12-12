import axios from "./axios"



export const FetchSuperheroes= async ()=> {
  const {data} = await axios.get("/superheroes");
  return data;
}