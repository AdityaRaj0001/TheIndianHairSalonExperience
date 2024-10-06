import React, { useState, useEffect } from "react";
import { ChevronDown, Music } from "lucide-react";
import { Howl } from "howler"; // Import Howl from 'howler'

interface NavbarProps {
  songs: string[];
  selectedSong: string | null;
  onSelectSong: (song: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  songs,
  selectedSong,
  onSelectSong,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playingSong, setPlayingSong] = useState("DilHaiKiMantaNahi.mp3"); // Initial song to song1
  const [sound, setSound] = useState<Howl | null>(null);

  const playSong = (song: string) => {
    console.log("Playing song:", song);
    if (sound) {
      
      sound.stop();
    }

    // Create a new Howl instance and play the new song
    const newSound = new Howl({
      src: [`/${song}`],
      volume: 1.0, // Adjust volume as necessary
      html5: true, // Use html5 for better performance with large files
    });

    newSound.play(); // Play the new song
    setSound(newSound); // Set the new sound instance
  };

  useEffect(() => {
    if (songs.length > 0) {
      const defaultSong = songs[0];
      setPlayingSong(defaultSong); // Set the default song
      playSong(defaultSong); // Play the default song
    }
  }, [songs]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-white" />
            <span className="ml-2 text-white font-bold text-lg">
              Indian Hair Salon Experience
            </span>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-white focus:outline-none"
            >
              {selectedSong || "Select a song"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2  bg-white rounded-md shadow-lg py-1">
                {songs.map((song) => (
                  <button
                    key={song}
                    onClick={() => {
                      onSelectSong(song);
                      setPlayingSong(song); // Set the selected song
                      playSong(song); // Play the selected song
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {song}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
