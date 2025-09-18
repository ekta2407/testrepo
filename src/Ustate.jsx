import React from "react";
function Ustate(){
    const[count,setcount]=React.useState(0)
    return(
        <div>
            <button type="button" className="btn"onClick={()=>{
                setcount(count+1)
            }}>INCREMENT</button>
            {count}
            <button type="button" className="btn" onClick={()=>{
                setcount(count-1);
            }}>DECREMENT</button>
        </div>
    )
}
export default Ustate