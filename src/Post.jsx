import axios from "axios"
import React from "react"
function Post(){
    const[data,setdata]=React.useState({})
    const handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const handleclick=()=>{
        console.log(data)
        axios.post('https://fakestoreapi.com/products',data)
        .then((res)=>{
console.log(res.data)
        })
        .catch((err)=>{
console.log(err)
        })
    }
    return(
        <div>

<label>Title</label>
<input name="title" onChange={(e)=>{
    handlechange(e)
}} value={data.title}/>

<label>Price</label>
<input name="price" onChange={(e)=>{
    handlechange(e)
}} value={data.price}/>


<label>Description</label>
<input name="description"onChange={(e)=>{
    handlechange(e)
}} value={data.description}/>

<label>Image</label>
<input name="image" onChange={(e)=>{
    handlechange(e)
}} value={data.image}/>

<label>category</label>
<input name="category" onChange={(e)=>{
    handlechange(e)
}} value={data.category}/>

<button onClick={()=>{
    handleclick()
}}>SUBMIT</button>
        </div>
    )
}
export default Post