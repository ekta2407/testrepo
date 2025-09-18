import React from "react";
function Onchange (){
    const handleChange =(e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <div classNameName="input-group mb-3"></div>
        
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
        </div>
    )

}
export default Onchange