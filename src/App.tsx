import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const songs = ['DilHaiKiMantaNahi.mp3', 'DilToPagalHai.mp3', 'MeraDilBhiKitnaPagalHai.mp3', 'EkLadkiKoDekhaToAisaLaga.mp3']

function App() {
  const [selectedSong, setSelectedSong] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      <Navbar songs={songs} selectedSong={selectedSong} onSelectSong={setSelectedSong} />
      <HeroSection />
    </div>
  )
}

export default App