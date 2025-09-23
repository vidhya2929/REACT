import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(   ////  <div id="root"></div> it is controlled by taking the element 
  <StrictMode>
    <App />       {/**Imported from App.js */}
  </StrictMode>,
)


// Starting point of application
// here after selecting the root , React has used a render method and it has rendered the App component