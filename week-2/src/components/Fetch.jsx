import { useState, useEffect } from "react";
export default function Fetch(){
  const[data, setData] = useState(null);


  useEffect(() => {
    async function fetchData(){
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await res.json();
      setData(result);
    }
    fetchData();
  },[]);
  return (
    <div>
      <h1>Data Fetching Example</h1>
      {data ? <p>{data.title}</p>:<p>Loading...</p>}
    </div>
  )
}