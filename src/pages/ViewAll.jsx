/* eslint-disable no-unused-vars */
import React from 'react'
import Card from "../components/Card"
import {Link} from "react-router-dom"
export const ViewAll = ({data}) => {
   
    console.log(data,"unsorted")
     data.sort((a,b)=>b.upvotes - a.upvotes)
     console.log(data,"sorted")
  return (
    <div className='container mx-auto px-6'>
        {
       
        // console.log(x,data)
        }
       { data.map((value)=> 
       <div key={value.id} >
        <Link to={"/"+value.id} >
            <Card data={value}  />
        </Link>
        </div> )}

    </div>
  )
}
