
const CreatePost = () => {

const handleForm = (event)=>{
 event.preventDefault()

let form = {title: event.target[0].value,
    content: event.target[1].value, 
    image_url: event.target[2].value}
console.log(form)
}

  return (
    <div className=" bg-emerald-50 border-2 max-w-xl rounded-lg	mx-auto px-4 py-5
    ">
    <form onSubmit={handleForm}>

        <input type="text" placeholder="Title" className="w-full p-1 mt-3  rounded-md" name="title"/>
        <textarea placeholder="Content (Optional)" rows="8" className="w-full p-1 mt-5 rounded-md" name="content"/> 
        <input type="url" placeholder="Image URL (Optional)" className="w-full p-1 mt-5   rounded-md" name="image_url" id="image" />
        <input className="bg-emerald-600 py-2 px-3 mt-5  text-stone-100 rounded-lg" type="submit" value="Create Post" />
    </form>
    
    
    </div>
  )
}

export default CreatePost