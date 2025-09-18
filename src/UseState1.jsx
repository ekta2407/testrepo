import React from "react";
function Usestate1(){

    const[name,setname]=React.useState('')
    const[password,setpassword]=React.useState('')

    const handlenamechange=(e)=>{
setname(e.target.value)
    }

const handlepasschange=(e)=>{
    setpassword(e.target.value)
}
    
    return(
       
        <div className="box" style={{alignItems:"center", border:"1px solid black",padding:"30px"}}>

<div class="input-group mb-3">
  <input   onChange={(e)=>{
    handlenamechange(e)
  }}type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input onChange={(e)=>{ handlepasschange(e)}}    type="text" class="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1"/>
</div>

<button onClick={()=>{
console.log("name",name,"password",password)
}}   type="button" class="btn btn-success">Login</button>

        </div>
         
       
    )
}
export default Usestate1
