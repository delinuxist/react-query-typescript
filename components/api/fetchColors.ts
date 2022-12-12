import axios from "./axios"

export const FetchColors = async ({pageParam= 1}) => {
  const {data} = await axios.get(`/colors?_limit=2&_page=${pageParam}`);
  return data;
}