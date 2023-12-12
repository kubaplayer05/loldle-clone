import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChampionsProvider} from "./context/championsContext.tsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChampionsProvider>
            <App/>
        </ChampionsProvider>
    </React.StrictMode>,
)
