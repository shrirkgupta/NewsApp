import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {

    let [open,setclose]=useState(true)

  return (

    <nav>
    <div class="logo">
         <h1>NEWS</h1>
     </div>
     <ul className= 'mainnav'>
         <li>Sports</li>
         <li>Political</li>
         <li>State</li>
         <br />
         {/* <li><input type="text" /></li>
         <li><button>search</button></li> */}

     </ul>
     <ul className= {`${open ?'phonenav':''} flex `}>
         <li>Sports</li>
         <li>Political</li>
         <li>State</li>

     </ul>
     <div ><FiAlignJustify className="menu-icon" onClick={()=>setclose(!open)} /></div>
  </nav>
  )
}
