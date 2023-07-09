import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProvedorContextoGeneral } from './componentes/Contexto/ContextoGeneral'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvedorContextoGeneral>
      <App />
    </ProvedorContextoGeneral>
  </React.StrictMode>,
)
