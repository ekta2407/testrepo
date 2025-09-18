import React from "react";


function Counter() {
const[count,setCount]=React.useState(0)
  const increment = () => {
    alert("Successfully clicked!");
  };

  const decrement = () => {
    alert("Button 2 clicked!");
  };

//   const handleChange = (e) => {
//     console.log("Input value:", e.target.value);
//   };

  return (

    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button><br/>
      
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrement </button><br/>

      {/* <input
        onChange={(e) => {
          console.log("Event", e.target.value); 
        }}
        
      /><br/>

<input
        onChange={(e) => {
          handleChange(); 
        }}
        
      /><br/> */}

    </div>
  );
}

export default Counter;
