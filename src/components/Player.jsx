import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Player = ({duration, randomId}) => {
  return (
    <div className='player'>
      <div className="player__controllers"> 
        <Link to={`/song/${randomId}`}>
          <FontAwesomeIcon className='player__icon' icon={faBackward} />
        </Link>
        <FontAwesomeIcon className='player__icon player__icon--play' icon={faCirclePlay} />
        <Link to={`/song/${randomId}`}>
          <FontAwesomeIcon className='player__icon' icon={faForward} />
        </Link>
      </div>

      <div className="player__progress">
        <p>00:00</p>

        <div className='player__bar'>
          <div className="player__bar-progess"></div>
        </div>

        <p>{duration}</p>
      </div>
    </div>
  )
}

export default Player