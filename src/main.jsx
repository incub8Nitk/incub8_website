import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import EventsPage from './sections/EventsPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/events', element: <EventsPage /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
