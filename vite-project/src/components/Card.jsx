// function Card({image, title, description}){
//   return(
//     <div style={{
//       border: "1px solid #ccc",
//       borderRadius: "10px",
//       padding: "16px",
//       width: "300px",
//       textAlign: "center",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//       margin: "10px"
//     }}>
//       <img 
//       src = {image}
//       alt={title}
//       style={{width: "100%", borderRadius: "10px", marginBottom: "10px"}}
//       />
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }
// export default Card;



// function Card(props){
//   return(
//     <div style={{
//       border: "1px solid #ccc",
//       borderRadius: "10px",
//       padding: "16px",
//       width: "300px",
//       textAlign: "center",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//       margin: "10px"
//     }}>
//       <img 
//       src = {props.image}
//       alt={props.title}
//       style={{props,width: "100%", borderRadius: "10px", marginBottom: "10px"}}
//       />
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </div>
//   );
// }
// export default Card;

// Enhance this to accept a children, button

function Card({image, title, description, children}){
  return(
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      width: "300px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      margin: "10px"
    }}>
      <img 
      src = {image}
      alt={title}
      style={{width: "100%", borderRadius: "10px", marginBottom: "10px"}}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      {children && <div style={{marginTop: "10px"}}>{children}</div>}
      {/* if children exist(is not undefined or null), then render the next part */}
      {/* if children is empty, nothing will be rendered */}
    </div>
  );
}
export default Card;