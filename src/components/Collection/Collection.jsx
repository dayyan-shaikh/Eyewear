import React from 'react'
import './Collection.css'
import { products } from '../../utils/products' 
import Item from '../Item/Item'

const Collection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
      <div className="collections">
        {products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.productName} image={item.imgUrl} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>      
    </div>
  )
}

export default Collection