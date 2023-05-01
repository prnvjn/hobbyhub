
import Data from "./data.json"
import './App.css'

import {useRoutes} from 'react-router-dom'
import ViewPost from "./pages/ViewPost"
import { ViewAll } from "./pages/ViewAll"
function App() {

let element = useRoutes([
{
  path: "/",
  element: <ViewAll data={Data}/>
},
{
  path: '/:userId',
  element: <ViewPost data={Data}/>
}


])





  return (
    <>
     <h1 className='text-5xl bg-slate-300' >hello world</h1>
   {element}
    </>
  )
}

export default App
