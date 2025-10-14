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
		const start = Date.now()

		function finalize() {
			const elapsed = Date.now() - start
			const remaining = Math.max(0, 2000 - elapsed)
			setTimeout(() => { if (mounted) setReady(true) }, remaining)
		}

		if (document.readyState === 'complete') {
			finalize()
		} else {
			const onLoad = () => {
				window.removeEventListener('load', onLoad)
				finalize()
			}
			window.addEventListener('load', onLoad)
		}

		return () => { mounted = false }
	}, [])

	if (!ready) return <FullScreenLoader />
	return children
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BootGate>
			<Suspense fallback={<FullScreenLoader />}>
				<RouterProvider router={router} />
			</Suspense>
		</BootGate>
	</StrictMode>,
)
