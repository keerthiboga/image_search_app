import React, { useState } from 'react'
import axios from 'axios'
import SearchEmoji from './assets/searchEmoji.png'
const ImageSearch = () => {
  const [val,setval]=useState("");
  const [url,seturl]=useState("");
  let pageNo=Math.floor(Math.random()*10);
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(val);
    const response=axios.get(`https://api.unsplash.com/search/photos?page=${pageNo}&query=${val}&client_id=C1IjvinZnUakROfWf4fZ16VqFlRJ3HsPlyavmYgta6I`);
    response.then(json=>seturl(json.data.results[Math.floor(Math.random()*10)].urls.small))
    .catch(err=>console.log("error occured: "+err));
    setval("");
  }
  return (
    <div className='flex flex-col gap-12 justify-center items-center'>
      <div className="w-full h-36 bg-black text-white flex flex-col gap-4 justify-center items-center p-4">
      <h1 className='text-3xl font-bold'>Search Images</h1>
      <form onSubmit={handleSubmit}>
        <input className='text-2xl border-1 outline-none px-4 py-2 rounded-tl rounded-bl focus:ring-2 focus:ring-white' type="text" placeholder='search anything...' value={val} onChange={(e)=>setval(e.target.value)} />
        <button className='text-2xl border-1 focus:ring-2 px-4 py-2 bg-blue-500 rounded-tr rounded-br'>Search</button>
      </form>
      </div>
     <div className='w-auto h-auto border-none'>
      {
        (url)? <img className='w-[350px] h-[400px] object-cover border-none' src={url}></img>:<img src={SearchEmoji}></img>
      }
      {/* {url && <img className='w-[350px] h-[400px] object-cover border-none' src={url}></img>} */}
     </div>
    </div>
  )
}

export default ImageSearch
