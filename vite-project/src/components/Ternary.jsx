// export default function Ternary(){
//   const display = false;
//   return display ? <h1>Message 1</h1>: <h1>Message 2</h1>;
// }

import Welcome from "./Welcome";

// For Components
export default function Ternary() {
  const display = true;
  return display ? <Welcome /> : <Code />;
}
