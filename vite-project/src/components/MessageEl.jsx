// export default function MessageEl(){
//   // Element variables allow to store HTML elements into them
//   let messageOne = <h1>This is message 1</h1>;
//   let messageTwo = <h1>This is message 2</h1>;
//   const display = true;
//   if(display) {
//     return messageOne;
//   }
//   else{
//     return messageTwo;
//   }
// }                      //Still have 2 return statements

export default function MessageEl() {
  let message;
  const display = false;
  if (display) {
    message = <h1>This is message 1</h1>;
  } else {
    message = <h1>This is message 2</h1>;
  }
  return message;
}
