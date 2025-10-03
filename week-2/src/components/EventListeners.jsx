import { useEffect, useState } from "react";

export default function windowWidth(){
  const[width, setWidth] = useState(window.innerWidth);

  useEffect(() =>{
    function handleResize(){
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    // CleanUp
    return () => {
      window.removeEventListener("resize",handleResize);
    };
  }, []);
  return <p>window width: {width}px</p>;
}