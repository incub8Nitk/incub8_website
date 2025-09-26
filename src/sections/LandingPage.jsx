import React from 'react'

export default function LandingPage() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
                src="landing-bg-pc.mp4"
            />
            <div className="relative z-10 flex flex-col items-start mt-40 ml-20 h-full text-white">
                <img src="Incub8'25 logo dark bg 1.png" alt="" />
            </div>
        </div>

    )
}
