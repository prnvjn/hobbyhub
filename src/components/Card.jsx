import React from 'react'
import{ Link }from 'react-router-dom'
import { HandThumbUpIcon} from '@heroicons/react/24/outline'
const Card = ({data}) => {
  return (
    
    <div className='bg-teal-50 my-3 px-10 hover:bg-teal-100 py-5 rounded-lg' >
       <span>Posted{}</span> 
       <h2 className='text-2xl font-bold my-4'>
        {data.title}
       
       </h2>

       <p className='flex gap-2 '>
{data.upvotes}
        <HandThumbUpIcon class="h-6 w-6 text-teal-800"/>  

       </p>
       


        </div>
  )
}

export default Card