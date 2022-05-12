import './index.css'
import ReactDom from 'react-dom'
import React from 'react'
import App from './app.js'

ReactDom.render
(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)