import React, { useState } from 'react';

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
console.log(isMouseOver)
  const handleMouseEnter = () => {
    setIsMouseOver(true);
    console.log('Mouse entered div');
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    console.log('Mouse left div');
  };

  const handleScroll = () => {
    if (isMouseOver && window.scrollY > 0) {
      setIsMouseOver(false);
      console.log('Scrolled down');
    }
  };

  // Attach scroll event listener to the window
  window.addEventListener('scroll', handleScroll);

  return (
    <div
      id="myDiv"
      style={{width:"500px",height:"550px", border:"solid red"}}
      className="my-div"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover over me!
    </div>
  );
}

export default App;