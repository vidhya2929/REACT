import {useEffect, useState} from "react";
export default function SetIntervall(){
  
  const[count,setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount+1);
    },1000);

    return() => {
      clearInterval(intervalId)
    }
  },[]);
  return(
    <div className="flex flex-col items-center p-6">
      <p className="text-lg">Count : {count}</p>
    </div>
  );
}