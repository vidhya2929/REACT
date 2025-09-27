import React, {useState, useEffect} from "react";
export default function HeiWidth(){
  const[width,setWidth] = useState(window.innerWidth);
  const[height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
      window.addEventListener("resize", handleResize);
      console.log("Event Listener Added") 
      // umounts
      return () => {
          window.removeEventListener("resize", handleResize);
          console.log("Event Listener Removed");
      }
  },[])

  useEffect(() => {
    document.title = `Size ${width} X ${height}`
  },[width, height])



function handleResize(){
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
}
  return(
    <>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>
      </>
  )
}

// If it is in strict mode it will run twice