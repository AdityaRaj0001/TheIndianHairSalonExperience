import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://media.istockphoto.com/id/635812708/photo/hairdresser-cutting-mans-hair-on-the-streets-of-jaipur-rajasthan.jpg?s=612x612&w=0&k=20&c=AYb-T5fmWSbLJqCuZItcdppOT91EgYtEUyfhsQHgtSE="
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
  )
}

export default HeroSection