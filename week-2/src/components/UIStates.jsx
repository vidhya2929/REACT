export default function UserList(){
  const status = "success";
  const users = ["Alice", "Bob","Charlie"];

  if(status === "loading"){
    return <p>Loading users</p>
  }

  if(status === "error"){
    return<p>Something went wrong ❌</p>
  }
  if(status === "success" && users.length === 0){
    return <p>No users found.</p>
  }
  if(status === "success"){
    return (
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    )
  }
  return null;
}

// Loading and Empty State
const users = [];
const loading = false;

if(loading){
  return <p>Loading users...</p>;
}
if(!loading && users.length === 0){
  return <p>No users found</p>;
}
return(
  <ul>
    {users.map((user, index) => (
      <li key={index}>{user}</li>
    ))}
  </ul>
);
