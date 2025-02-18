import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
const SingleItem = ({id, name, image, banner, artist, pathId }) => {
  return (
                  <Link to={`/${pathId}/${id}`} className='single-item'>
                    <div className='single-item__div-image-button'>
                    <div className='single-item__div-image'>
                      <img 
                      className='single-item__image' 
                      src={image} 
                      alt={`Imagem de ${name}`} />
                    </div>
                    <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
                    </div>
        
                    <div className='single-item__texts'>
                      <div className='single-item__2lines'>
                        <p className='single-item__title'>{name}</p>
                      </div>
                      <p className='single-item__type'>{artist ?? "Artista"}</p>
                      
                    </div>
                  </Link>
  )
}

export default SingleItem