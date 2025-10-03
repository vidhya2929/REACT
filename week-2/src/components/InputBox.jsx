export default function InputBox({text, onTextChange}){
  return(
    <input type="text" value={text} onChange={(e) => onTextChange(e.target.value)} 
    className=" order p-2 rounded" placeholder="Type something..."/>
  )
}