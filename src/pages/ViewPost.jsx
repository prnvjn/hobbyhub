/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import { HandThumbUpIcon,TrashIcon,PencilSquareIcon } from '@heroicons/react/24/outline';
const ViewPost = ({data}) => {
    let {userId} = useParams();
 const post = data.filter(item => item.id == userId)[0]
    // const [data,setData] = useState(props.data);
    




  return (
    <div className='container mx-auto bg-teal-50 my-3 px-4 py-6'>
<span>Posted {null} </span>


<h2 className='text-2xl font-bold my-4 ' >{post.title}</h2>
    
   {post.content?<p className='my-4'>{post.content}</p>:null}

   {post.image_url?<img className='my-4' src={post.image_url} alt={post.title}  />:null}


    <div className='my-4 flex place-content-between '>
<span className='flex gap-2'>
    <button >
        <HandThumbUpIcon class="h-6 w-6 transition-fill duration-1000  text-teal-800 hover:fill-teal-400 "/>   
    </button>
    {post.upvotes}
</span>

  <span className='flex gap-2'>
    <button>
    <TrashIcon class="h-6 w-6 transition-fill duration-1000  text-teal-800 hover:fill-teal-400 "/>
    </button>
    <button>
        <PencilSquareIcon class="h-6 w-6 transition-fill duration-1000  text-teal-800 hover:fill-teal-400 "/>
    </button>
</span>
   
    </div>
    {console.log(post)}
    </div>
  )
}

export default ViewPost