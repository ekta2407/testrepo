import React from "react";

function Event() {
  const handleClick = () => {
    alert("Successfully clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Button 1</button><br/>
      <button onClick={handleClick}>Button 2</button><br/>

      <input
        onChange={(e) => {
          console.log("Event", e.target.value); 
        }}
        
      /><br/>

<input
        onChange={(e) => {
          handlechange(); 
        }}
        
      /><br/>

    </div>
  );
}

export default Event;
