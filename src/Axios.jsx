import React from 'react'
import axios from 'axios'
function Axios(){
    const [ data, setdata]=React.useState([])
    const fetchData=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
console.log(res.data)
setdata(res.data)
        })
        .catch((err)=>{
            console.log("error",err)
        })
     }
    console.log('data',data)
    return(
        <div>
<h2>Axios Fetch Example</h2>
<button onClick={fetchData}>GET DATA</button>


<table>
    <tr>
        <td>ID</td>
        <td>CATAGORY</td>
        <td>DISCRIPTION</td>
        <td>IMAGE</td>
        <td>PRICE</td>
        {/* <td>RATING</td> */}
        <td>TITLE</td>
    </tr>

    {data && data.map((val)=>(
<tr>
    <td>{val.id}</td>
     <td>{val.category}</td>
      <td>{val.description}</td>
       <td>{val.image}</td>
        <td>{val.price}</td>
         {/* <td>{val.rating}</td> */}
          <td>{val.title}</td>
</tr>
    ))}
</table>
        </div>
    )
}
export default Axios