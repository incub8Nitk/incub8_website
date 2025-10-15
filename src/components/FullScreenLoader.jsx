import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function FullScreenLoader() {
	return (
		<div style={{
			position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
			background: 'linear-gradient(135deg, #2e383c 0%, #111827 100%)', zIndex: 9999
		}}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
				<div style={{ width: 160, height: 160, display: 'block' }}>
					<DotLottieReact
						src="https://lottie.host/22ffa84b-2086-4a99-9dba-71b293ab3186/w11Rq0x3sP.lottie"
						loop
						autoplay
						style={{ width: 160, height: 160, display: 'block' }} 
						onError={() => {
							const spinner = document.getElementById('loader-fallback-spinner')
							if (spinner) spinner.style.display = 'block'
						}}
					/>
				</div>
				<div id="loader-fallback-spinner" style={{ width: 40, height: 40, borderRadius: '50%', border: '4px solid rgba(255,255,255,0.25)', borderTopColor: '#93c5fd', animation: 'spin 1s linear infinite', display: 'none' }} />
			</div>
		</div>
	)
}

export default FullScreenLoader


