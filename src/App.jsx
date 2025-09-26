import React, { useState, useRef } from 'react'
import LandingPage from "./sections/LandingPage"
import EventsHome from "./sections/events"
import Whatisincub8 from "./sections/whatisincub8"

function App() {
  const [isVideoPaused, setIsVideoPaused] = useState(false)
  const videoRef = useRef(null)

  return (
    <>
      <LandingPage 
        videoRef={videoRef}
        isVideoPaused={isVideoPaused}
        setIsVideoPaused={setIsVideoPaused}
      />
      <Whatisincub8 
        setIsVideoPaused={setIsVideoPaused}
        videoRef={videoRef}
      />
      <EventsHome />
    </>
  )
}

export default App
