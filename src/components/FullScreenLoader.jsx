import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function FullScreenLoader() {
	return (
		<div style={{
			position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
			background: 'linear-gradient(135deg, #2e383c 0%, #111827 100%)', zIndex: 9999
		}}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 180 }}>
				<DotLottieReact
					src="https://lottie.host/22ffa84b-2086-4a99-9dba-71b293ab3186/w11Rq0x3sP.lottie"
					loop
					autoplay
					style={{ width: '100%', height: '100%' }} 
				/>
			</div>
		</div>
	)
}

export default FullScreenLoader


