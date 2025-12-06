import React, { useState } from "react";
import Accordian from "./Accordian";

function Men() {
  const [show, setShow] = useState(null);
  const filter = ["Gender", "h", "k"]

  return (
    <div className="bg-gray-100 h-screen">
      <div className="p-6">
        <h1>Filter</h1>
        {filter.map((item) => (
          
          <Accordian 
          title={item}
          
          key={item} 
          show={item === show }
          setShow={() => setShow(show === item ? null : item)}
           />
        ))}
      </div>
    </div>
  );
}

export default Men;
