import React from "react";
function Form1(){
    const[firstname,setFirstname]=React.useState("");
    const[lastname,setLastname]=React.useState("");
    const[collegename,setcollegename]=React.useState("");
    const[contactnumber,SetNumber]=React.useState("");
    const[email,setemail]=React.useState("");
    const[check,setcheck]=React.useState([]);

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
  
  <input onChange={(e)=>{setFirstname(e.target.value) }} type="text" className="form-control" placeholder="Firstname" aria-label="Firstname" aria-describedby="basic-addon1"/>
</div>
         <div className="input-group mb-3">
  
  <input onChange={(e)=>{setLastname(e.target.value)}} type="text" className="form-control" placeholder="Lastname" aria-label="Lastname" aria-describedby="basic-addon1"/>
</div>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Email address</label>
<input onChange={(e)=>{setemail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>
<div className="input-group mb-3">
  
  <input onChange={(e)=>{setcollegename(e.target.value)}} type="text" className="form-control" placeholder="college name" aria-label="college name" aria-describedby="basic-addon1"/>
</div>
<div>
<input onChange={(e)=>{SetNumber(e.target.value)}} type="number" className="form-control" placeholder="contact number" aria-label="contact number" aria-describedby="basic-addon1"/>
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
 
</div>

<div>
  <button onClick={()=>{
    console.log(firstname,lastname,email,collegename,contactnumber,check);
  }}type="button" className="btn btn-primary">SUBMIT</button>
  </div>  

</div>
       
  
)
    }
    

export default Form1