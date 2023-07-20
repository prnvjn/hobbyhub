
import Data from "./data.json"
import { useEffect } from "react"
import {useRoutes, Link} from 'react-router-dom'
import ViewPost from "./pages/ViewPost"
import { ViewAll } from "./pages/ViewAll"
import EditPost from "./pages/EditPost"
import CreatePost from "./pages/CreatePost"
import { PlusCircleIcon,HomeIcon } from "@heroicons/react/24/outline"
import { supabase } from "./client"
function App() {

// useEffect(()=>{

// const fetchPost = async () =>{
//   const {data,error} = await supabase
//     .from('forum')
//     .select()
//     console.log(data)

// }
// fetchPost()
// },[])



let element = useRoutes([
{
  path: "/",
  element: <ViewAll data={Data}/>
},
{
  path: '/:userId',
  element: <ViewPost data={Data}/>
},
{
  path: '/:userId/edit',
  element: <EditPost data={Data}/>
},
{
  path: '/createpost',
  element: <CreatePost/>
}


])





  return (
    <div >
    <header className="bg-emerald-700 text-stone-100 py-4">
    <nav className="container mx-auto px-6 bg-emerald-700 flex items-center content-center justify-between">
    <h1 className='hidden text-2xl font-bold  md:block' >HOBBY HUB</h1>
    <input type="text" className="rounded-full p-2 basis-1/2 md:basis-1/3 text-slate-500 " placeholder="Search" />
    <span className="flex gap-5">
     <Link to="/" > 
      <div > 
        <span className="block md:hidden" >
        <HomeIcon class="h-6 w-6 " /> </span> 
       <span className="hidden md:block">Home</span>
      </div> 
      </Link>

     <Link to="/createpost">
      <div> 
        <span className="block md:hidden"> <PlusCircleIcon class="h-6 w-6 " /> 
        </span>
        <span className="hidden md:block">Create New Post</span> 
        </div> 
      </Link>
     </span>
    </nav>
    </header>
   
    {element}

   


   </div>


    
  )
}

export default App
