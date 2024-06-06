import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/inter';
import 'swiper/css';
import "@/styles/index.scss"

import App from './app/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
