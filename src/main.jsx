import { StrictMode, Suspense, lazy, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import FullScreenLoader from './components/FullScreenLoader.jsx'

const App = lazy(() => import('./App.jsx'))

const router = createBrowserRouter([
  { path: '/', element: <App /> },
])

function BootGate({ children }) {
	const [ready, setReady] = useState(false)

	useEffect(() => {
		let mounted = true
		let heroReady = false
		let logoReady = false

		const finishIfReady = () => {
			if (!mounted) return
			if (heroReady && logoReady) {
				// Avoid one-frame flash
				requestAnimationFrame(() => requestAnimationFrame(() => { if (mounted) setReady(true) }))
			}
		}

		const onHeroReady = () => { heroReady = true; window.removeEventListener('hero-ready', onHeroReady); finishIfReady() }
		const onLogoReady = () => { logoReady = true; window.removeEventListener('hero-logo-ready', onLogoReady); finishIfReady() }

		window.addEventListener('hero-ready', onHeroReady)
		window.addEventListener('hero-logo-ready', onLogoReady)

		// Safety timeout to prevent infinite loader if events never fire
		const safety = setTimeout(() => { if (mounted) setReady(true) }, 8000)

		return () => {
			mounted = false
			clearTimeout(safety)
			window.removeEventListener('hero-ready', onHeroReady)
			window.removeEventListener('hero-logo-ready', onLogoReady)
		}
	}, [])

	if (!ready) return <FullScreenLoader />
	return children
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BootGate>
			<Suspense fallback={null}>
				<RouterProvider router={router} />
			</Suspense>
		</BootGate>
	</StrictMode>,
)
