import React, { useState } from 'react'

const WatchedButton = () => {
  const [isWatched, setIsWatched] = useState(false)

  function handleClick() {
    setIsWatched(true)
    localStorage.setItem(true)
  }

  return (
    <button className='w-24 h-8 bg-purple text-sm text-white font-bold rounded flex items-center justify-center'>
        <p></p>
    </button>
  )
}

export default WatchedButton;

