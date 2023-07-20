import {useParams, useLocation} from 'react-router-dom'
import { useState } from 'react'
const EditPost = () => {
    let{userId} = useParams()
    let {state} = useLocation()
    const [title,setTitle] = useState(state.title)
    const [content,setcontent] = useState(state.content)
    const [image_url,setImage_url] = useState(state.image_url)

  return (
    <div className=" bg-emerald-50 border-2 max-w-xl rounded-lg	mx-auto px-4 py-5
    ">
    <form >

        <input type="text" placeholder="Title" className="w-full p-1 mt-3  rounded-md" name="title" value={title}  />
        <textarea placeholder="Content (Optional)" rows="8" className="w-full p-1 mt-5 rounded-md" name="content" value={content}/> 
        <input type="url" placeholder="Image URL (Optional)" className="w-full p-1 mt-5   rounded-md" name="image_url" id="image" value={image_url} />
        <input className="bg-emerald-600 py-2 px-3 mt-5  text-stone-100 rounded-lg" type="submit" value="Update" />
    </form>
   { console.log(state)}
    
    </div>
  )
} 

export default EditPost