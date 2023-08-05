
import React, { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import animation from "./parot3.json";
import { motion } from "framer-motion";
import animation1 from './parrot4.json'
const LottieAnimation = () => {
  const [data, setData] = useState(true);
  const [removeAnimation, setRmoveAnimation] = useState(true);
 let myanim = data ?animation :animation1
  const options = {
    animationData: myanim,
    loop: true,
  };

  const style = {
    position: "relative",
    top: "600px",
  };

  const { View, setDirection } = useLottie(options, style);
  setDirection(-1);
  useEffect(() => {
    const setDirectionAfterDelay = () => {
      setTimeout(() => {
        setDirection(1);
      }, 700);
    };
    setDirectionAfterDelay();
  }, []);

  return (
    <>

    <div style={{width:"100vw",height:"100vh", backgroundColor:"green"}}>

    </div>
      {/* <motion.div
        className="box1"
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={{ scaleY: [1, 1, 0], transformOrigin: "top" }}
        transition={{ duration: 2.2, times: [0, 0.4, 0.4] }}
      >
        <motion.div
           animate={{ opacity: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
           id="image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            width: "100vw",
            top: "400px",
            opacity: 1,
          }}
        >
          <img src="https://assets.website-files.com/6102ca7c242024349fd95a21/6102ca7c2420244e8dd95a37_logo.svg" />
        </motion.div>

        <motion.div
 
        >
          {View}
        </motion.div>
      </motion.div> */}
    </>
  );
};

export default LottieAnimation;
