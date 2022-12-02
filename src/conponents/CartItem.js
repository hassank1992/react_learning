import React from 'react'
import "./CartItem.css"
function CartItem({item}) {
  return (
    <div className='cartItem'>
        <div className='CartItem-image'>
            <img src={process.env.PUBLIC_URL + '/items/' + item.image} alt='pic unable to load'/>
        </div>
        <div className='CartItem-info'>
            <h2>{item.title}</h2>
            <div className='info-stock'>{item.stock}</div>
            <div className='item-actions'>
                <div className='item-quantity'>
                    <select name='quantity' value={item.quantity}>
                        <option value="1">Qty 1</option>
                        <option value="2">Qty 2</option>
                        <option value="3">Qty 3</option>
                        <option value="4"> Qty 4</option>
                        
                    </select>
                </div>
                <div className='action-divider'>|</div>
                <div className='item-delete'>
                Delete
                </div>
            </div>
        </div>
        <div className='CartItem-price'>
            {item.price}
        </div>
    </div>
  )
}

export default CartItem