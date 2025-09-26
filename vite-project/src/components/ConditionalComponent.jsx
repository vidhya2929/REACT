// Conditionally rendering JSX
// export default function ConditionalComponent(){
//   const display = true;
//   if(display){
//     return (<div>
//        <h3>This is a conditional component</h3>
//     </div>
//     )
//   }
//   else{
//     return(
//     <div>
//       <h3>Code Everyday!</h3>
//     </div>
//   );
//   }

// }

// // Conditionally rendering of Components

import Welcome from "./Welcome";
import Code from "./Code";
export default function ConditionalComponent() {
  const display = true;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
