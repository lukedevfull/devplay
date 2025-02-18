import React from 'react'
import Player from '../components/Player.jsx'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs.js';
import { artistArray } from '../assets/database/artists.js';
const Song = () => {
  const  songId = useParams().id;



  const {image, name, duration, artist, audio, id, index} = songsArray
  .filter((currentSongObj) =>  
    currentSongObj.id === Number(songId))[0];

  const artistObj = artistArray.filter((currentArtistObj) =>  currentArtistObj.name === artist)[0]

  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artist)
  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length)- 1)
  const randomId = songsArrayFromArtist[randomIndex].id
  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={` imagem da musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`}>
          <div className='song__artist-image'>
            <img
            width={75}
            height={75}
            src={artistObj.image} alt= {`imagem do artista ${artist}`} />
          </div>
        </Link>
        <Player duration={duration} randomId={randomId}/>
        <div>
          <p className='song__name'>{name}</p>

          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song