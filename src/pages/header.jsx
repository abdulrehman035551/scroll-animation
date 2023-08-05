import { motion } from "framer-motion";
import "../index.css";
import React, { useEffect } from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./parrot.json";
import animation from "./parot3.json"
import Navbar from "./navbar";
const MyComponent = () => {
//   const options = {
//     animationData: animation,
//     loop: false,
//     height: 40,
//   };

//   const style = {
//     width: "100vw",
//     height: "auto",
//     color: "red",
//     // border: "solid red 5px",
//     backgroundColor: "rgb(13, 5, 40);",
//   };

//   const { View, setDirection } = useLottie(options, style);
// setDirection(-1)
  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:"lightblue",height:"100vh",width:"100vw" }}>

    </div>
    
    </>
    // <>
    //   <motion.div
    //     className="box1"
    //     initial={{ scaleY: 0, transformOrigin: "top" }}
    //     animate={{ scaleY: [1, 1, 0], transformOrigin: "top" }}
    //     transition={{ duration: 3, times: [0, 0.5, 0.5] }}
    //     exit={{ scaleY: 0 }}
     
    //   >
    //     <div style={{ width: "100vw",height:"100vh",position:"relative",top:"430px" }}>
    //       {View}
    //     </div>
    //   </motion.div>
    // </>
  );
};

export default MyComponent;
