import axios from "./axios"


export const FetchChannelByChannelId = async (channelId: string)=> {
const {data} = await axios.get(`/channels/${channelId}`)
return data
}