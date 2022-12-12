import axios from "./axios"


export const FetchFriends =async () => {
  const {data} = await axios.get("/friends");
  return data
}