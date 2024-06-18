import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData();
  //  const [data,setData]=useState([]);
 // useEffect(()=>{
 //   fetch('https://api.github.com/users/universalcosmologist')
 //   .then(response=>response.json())
 //   .then(data=>{
 //       setData(data);
 //   })
 // },[])
  return (
    <>
        <div className='text-3xl font-bold text-center bg-slate-600 text-white p-6 m-2'>Github followers :{data.followers}
        <img src={data.avatar_url} alt='git picture' width={300}/>
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/universalcosmologist');
    return response.json();
}