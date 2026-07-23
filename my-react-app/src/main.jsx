import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

    // const element = <h1>Hello, world!</h1>;
    // const element = <input type="text" value="Hello, world!" />;

createRoot(document.getElementById('root')).render(
  // element
  // <App />
  <StrictMode>
    <App />
  </StrictMode>
  
)
