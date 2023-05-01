/* eslint-disable no-unused-vars */
import React from 'react'
import Card from "../components/Card"
import {Link} from "react-router-dom"
export const ViewAll = ({data}) => {
  return (
    <div>
       { data.map((value)=> 
       <div key={value.id} >
        <Link to={"/"+value.id} >
            <Card data={value}  />
        </Link>
        </div> )}

    </div>
  )
}
