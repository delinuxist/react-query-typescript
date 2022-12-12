import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FetchChannelByChannelId } from "../components/api/fetchChannelByChannelId";
import { FetchUserByEmail } from "../components/api/fetctUserByEmail";


const DependentQueries = ()=> {
const [email,setEmail] = useState("");

const {data: user,refetch: userRefetch} = useQuery({queryKey: ["user",email],queryFn:()=> FetchUserByEmail(email),enabled:false})
const channelId = user?.channelId ? user.channelId :  "";

const {data: channel} = useQuery({queryKey: ["channel",channelId],queryFn: ()=> FetchChannelByChannelId(channelId),enabled: channelId == "" ? false : true})

  return(
    <div>
      <h1>Dependent Queries</h1>
      <input className="h-8 px-2 ml-2 border rounded-md" placeholder="search user" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <button onClick={()=> userRefetch()} className="p-2 ml-8 bg-green-500 rounded-md">Search</button>
      <div>
        <h1>Courses on this users Channel</h1>
        <h1>{`ChannelId: ${channelId}`}</h1>
        <div>
          <h1>Courses</h1>
          {channel?.courses.map((course: string,index: number)=><li key={index} >{course}</li>)}
        </div>
      </div>
    </div>
  )
}


export default DependentQueries;