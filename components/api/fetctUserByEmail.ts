import axios from "./axios"


export const FetchUserByEmail =async (email: string)=> {
  const {data} = await axios.get(`/users/${email}`)
  return data;
}