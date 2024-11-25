import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    
        <Link className='link' to={`/product/${item.id}`}> 
            <div className='card'>
                <div className='image'>
                   {item.isNew && <span>New Season</span>}
                    <img className='mainImg' src={item.img}/>
                    <img className='secondImg' src={item.img2}/>
                </div>
                <h2>{item.title}</h2>
                <div className='prices'>
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
  
  )
}

export default Card