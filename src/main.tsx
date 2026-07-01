import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import faviconUrl from './assets/favicon.svg'
import './index.css'

const faviconLink = document.querySelector<HTMLLinkElement>('link[rel*="icon"]')
  ?? (() => {
    const link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
    return link
  })()

faviconLink.type = 'image/svg+xml'
faviconLink.href = faviconUrl

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
