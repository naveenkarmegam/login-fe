import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Components/User/style/user.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/frame.min.css'; 
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap'; 
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
