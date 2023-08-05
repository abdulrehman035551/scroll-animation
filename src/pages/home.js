import React, { useState } from "react";
import "./home.css";

function Home() {
  const [isHovered, setIsHovered] = useState(null); 
  const [isHovered2, setIsHovered2] = useState(null); 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  console.log(isHovered2);

  let rotatingTextClass1;
  let rotatingTextClass2
  if (isHovered === true) {
    rotatingTextClass1 = "rotating-text-hovered1";
  } else if (isHovered === false) {
    rotatingTextClass1 = "rotating-remove-text1";
  } else {
    rotatingTextClass1 = "another-class"; 
  }
  if (isHovered2 === true) {
    rotatingTextClass2 = "rotating-text-hovered2";
  } else if (isHovered2 === false) {
    rotatingTextClass2 = "rotating-remove-text2";
  } else {
    rotatingTextClass2 = "another-class2"; 
  }
console.log();
  return (
    <>
      <div
      id="box"
        className={rotatingTextClass1}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
     <span>h</span><span>o</span><span>m</span><span>e</span>
          
          
         
        </div>
      </div>
      <div
      id="box"
        className={rotatingTextClass2}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <div>
         <span>P</span><span>r</span><span>o</span><span>j</span>
          
          
         
        </div>
      </div>
    </>
  );
}

export default Home;
