import React, { useState,useEffect } from 'react'
// import axios from 'axios'
import SearchEmoji from './assets/searchEmoji.png'
const ImageSearch = () => {
  const [val,setval]=useState("");
  const [lst,setlst]=useState([]);
  const [term,setSearchTerm]=useState("");
  let pageNo=Math.floor(Math.random()*10);
  useEffect(()=>{
    if(term)
    {
      fetchData(term);
    }
   },[term])
  const fetchData=async (term)=>
  {
    const response=await fetch(`https://api.unsplash.com/search/photos?page=${pageNo}&per_page=12&query=${term}&client_id=C1IjvinZnUakROfWf4fZ16VqFlRJ3HsPlyavmYgta6I`);
    const jsonData=await response.json();
    const arr=(jsonData.results);
    const newlist=([...arr]);
    setlst(newlist);
  }
 
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    setval("");
  }
  const handleSearch = () => {
    setSearchTerm(val);
    pageNo=Math.floor(Math.random()*10);
  };
  return (
    <div className='flex flex-col gap-12 justify-center items-center'>
      <div className="w-full  bg-black text-white flex flex-col gap-4 justify-center items-center p-4">
      <h1 className='text-3xl font-bold'>Search Images</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:flex-row md:gap-0">
        <input className='text-2xl border-1 outline-none px-4 py-2 sm:rounded-tl sm:rounded-bl sm:rounded-tr-[0] sm:rounded-br-[0]  rounded-lg focus:ring-2 focus:ring-white' type="text" placeholder='search anything...' value={val} onChange={(e)=>setval(e.target.value)} />
        <button className='text-2xl border-1 focus:ring-2 px-4 py-2 bg-blue-500 sm:rounded-tr sm:rounded-br sm:rounded-tl-[0] sm:rounded-bl-[0] rounded-lg' onClick={handleSearch}>Search</button>
      </form>
      </div>
     <div >
     {(lst.length>0)?<div className='w-auto h-auto border-none grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
     { lst.map((ele,idx)=>(
          <img key={idx} src={ele.urls.small} className='h-[400px] w-[350px] object-cover'></img>
        ))
      }
     </div>:<img src={SearchEmoji}></img>}
     </div>
    </div>
  )
}

export default ImageSearch
