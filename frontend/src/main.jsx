import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UserContext from './context/usercontext';
import CaptainContext from './context/captaincontext';
import SocketProvider from './context/SocketContext.jsx';

createRoot(document.getElementById('root')).render(
  
    <CaptainContext>
    <UserContext>
    <SocketProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </SocketProvider>
    </UserContext>
    </CaptainContext>
  
)
