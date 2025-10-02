export default function ApiState(){
  const status = "loading";
  const data = ["React", "Vue","Angular"];

  if(status === "loading"){
    return <p>Fetching data...</p>;
  }
  if(status === "error"){
    return <p>Something went wrong</p>;
  }
  if(status === "success" && data.length === 0){
    return <p>No results</p>;
  }
  if(status === "success"){
    return (
      <ul>
        {data.map((item)=>(
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
}