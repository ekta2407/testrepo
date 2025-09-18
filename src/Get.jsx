import React from 'react'
import axios from 'axios'
function Get(){
    const[data,setdata]=React.useState([])

    const handleclick=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
setdata(res.data)
        })
        .catch((err)=>{
console.log("error",err)
        })
    }

    console.log(data)

    return(
        <div>

<button onClick={handleclick}>GET DATA</button>
<table border='1'>
  <tr>
        <td>ID</td>
        <td>CATAGORY</td>
        <td>DISCRIPTION</td>
        <td>IMAGE</td>
        <td>PRICE</td>
        <td>TITLE</td>
    
    </tr>
  {data && data.map((val)=>(
<tr>
    <td>{val.id}</td>
     <td>{val.category}</td>
      <td>{val.description}</td>
       <td>{val.image}</td>
        <td>{val.price}</td>
          <td>{val.title}</td>
</tr>
    ))}
</table>
        </div>
    )
}
export default Get