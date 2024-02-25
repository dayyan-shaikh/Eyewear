import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-new-price">
            ${props.price}
        </div>
       
      </div>
      <button>Buy now</button>
    </div>
     
  )
}

export default Item
