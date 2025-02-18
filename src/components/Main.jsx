import React from 'react'
import ItemList from './ItemList.jsx'
import { artistArray } from '../assets/database/artists.js'
import { songsArray } from '../assets/database/songs.js'
const Main = ( {type} ) => {
  return (
    <div className='main'>
      {type === "artists" || type === undefined ? (<ItemList 
      title="Artistas Populares"
      items={10}
      itemsArray={artistArray}
      path="artists"
      pathId="artist"
      />) : (<></>)
      } 

      {type === "songs" || type === undefined ? (<ItemList 
      title="Musicas Populares"
      items={20} 
      itemsArray={songsArray}
      path="songs"
      pathId="song"
      />) : (<></>)
      }
      
    </div>
  )
}

export default Main