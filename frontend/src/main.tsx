import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChampionsProvider} from "./context/championsContext.tsx";
import './index.css'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChampionsProvider>
            <App/>
        </ChampionsProvider>
    </React.StrictMode>,
)
