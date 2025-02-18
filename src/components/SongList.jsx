import React from 'react'
import SongItem from './SongItem.jsx'
import { useState } from 'react'

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5)
  return (
    <div className="songList">
      {songsArray
      .filter((currentVallue, index) => index < items)
      .map((currentSoundObj, index) => 
      <SongItem {...currentSoundObj} 
      index= {index} 
      key={index}
      />
    )}

      
      <p className='song-list__see-more' onClick={() => { setItems(items + 5)}}>Mostrar mais</p>
    </div>
  )
}

export default SongList