import React from 'react'
import SingleItem from './SingleItem.jsx'
import { Link, useLocation } from 'react-router-dom'

const ItemList = ({title, items, itemsArray, path, pathId}) => {
  const { pathname } = useLocation()
  const isHome = pathname === "/";
  const totItems = isHome ? items : Infinity;

  return(
    <div className='item-list'>
      <div className='item-list__header'>
      <h3>{title}</h3>

      {isHome ? <Link className="item-list__link" 
      to={`${path}`}>Mostrar tudo</Link> : <></>}
      
      </div>
      
      <div className='item-list__container'>
      {itemsArray
        .filter((currentVallue, index) => index < totItems)
        .map((currObj, index) => 
          <SingleItem
          pathId={pathId}
        {...currObj}
        key= {`${title} ${index}`}
        />             
      )}
      </div>
    </div>
  )
}

export default ItemList