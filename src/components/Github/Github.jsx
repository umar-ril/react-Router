// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {

    const data = useLoaderData(gitDataLoader)

    // const[data,setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/umar-ril")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])

  return (
    <div className=" bg-gray-500 text-white text-3xl mx-10 p-4 text-center rounded-3xl">
      <h1 >Github followers : {data.followers}</h1>
      <img className=" rounded-full" src={data.avatar_url} alt="git pic" width="300px" />
    </div>
  )
}

export default Github

export const gitDataLoader = async () => {
   const response = await fetch("https://api.github.com/users/umar-ril")

   return response.json();

}
