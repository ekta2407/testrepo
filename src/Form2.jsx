import React from "react";
function Form2(){
    const[data,setData]=React.useState({})
    const handlechange=(e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    let handlecheckchange =(e)=>{
        let data =check;
        if(data.includes(e.target.value)){
            data.splice(data.indexOf(e.target.value),1);
        }else{
            data.push(e.target.value);
        }
        setcheck(data);
    }

    return(

   
        <div>
        <div className="input-group mb-3">
  
  <input onChange={(e)=>{handlechange(e) }} type="text" name="Firstname" className="form-control" placeholder="Firstname" aria-label="Firstname" aria-describedby="basic-addon1"/>
</div>
         <div className="input-group mb-3">
  
  <input onChange={(e)=>{handlechange(e)}} type="text" name="lastname" className="form-control" placeholder="Lastname" aria-label="Lastname" aria-describedby="basic-addon1"/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Email address</label>
<input onChange={(e)=>{handlechange(e)}} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>
<div className="input-group mb-3">
  
  <input onChange={(e)=>{handlechange(e)}} type="text" name="collegename" className="form-control" placeholder="college name" aria-label="college name" aria-describedby="basic-addon1"/>
</div>
<div>
<input onChange={(e)=>{handlechange(e)}} type="number"name="contact number" className="form-control" placeholder="contact number" aria-label="contact number" aria-describedby="basic-addon1"/>
</div>
<div>
        <label>HOBBY</label>
  <input onClick={(e)=>{
    handlecheckchange(e);
  }} type="checkbox" value="dancing"/>dancing
    <input onClick={(e)=>{
    handlecheckchange(e);
  }} type="checkbox" value="singing"/>singing
    <input onClick={(e)=>{
    handlecheckchange(e);
  }} type="checkbox" value="painting"/>painting
  <button onClick={()=>{
    console.log(data);
  }}>SUBMIT</button>
 
</div>



</div>
       
  
)
    }
    

export default Form2