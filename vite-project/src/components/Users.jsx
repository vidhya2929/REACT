import {useEffect, useState} from "react";
export default function Users(){
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setusers(data));
  },[])   // empty array ==> run once on mount

  return(
    <>
    <ul>
      {users.map((u)=> (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
    </>
  );
}


