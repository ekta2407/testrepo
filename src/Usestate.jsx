
import React , { useState } from "react";

function Usestate(){
    const [count ,setcount]=useState(0)
    return(
        <div>
            <button   onClick={()=>{setcount(count+1)}} type="button" class="btn btn-success">INCREMENT</button>
            {count}
            <button  onClick={()=>{setcount(count-1)}}type="button" class="btn btn-danger">DECREMENT</button>

        </div>
    )
}
export default Usestate