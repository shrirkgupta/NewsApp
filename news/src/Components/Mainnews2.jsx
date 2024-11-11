import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Mainnews2() {

    let [news , setnews] = useState([])

  let fetchnews= async ()=>{
    let response = await axios.get(" https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=12dba61a3df0432496f2040e772889f8")
    console.log(response.data.articles)
    setnews(response.data.articles)

  }
  useEffect(()=>{
    fetchnews()
  },[])


  return (
    <>
    <div className=' flex flex-wrap gap-8 p-5 justify-center'>
    {news.map((rishabh)=>(
        <div className='news p-2 border-2 h-[280px] w-[200px] bg-gray-100 '>
            <img src={rishabh.urlToImage} alt="" />
            <br />
            <h1>{rishabh.author}</h1>
            <p >{rishabh.content}</p>
            <button className='p-2 border-2 flex bg-blue-200 rounded-md '><a href={rishabh.url}>ReadMore</a></button>
        </div>
    ))
    }</div>
    </>
  )
}
