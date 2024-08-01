import React from 'react'
import ReactDOM from 'react-dom/client'
import UseMemoEx from './UseMemoEx.jsx'
import UseCallbackEx from './UseCallbackEx.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UseMemoEx /> */}
    <UseCallbackEx />
  </React.StrictMode>,
)
