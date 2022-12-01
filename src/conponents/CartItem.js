import React from 'react'
import "./CartItem.css"
function CartItem() {
  return (
    <div className='CartItem'>
        <div className='CartItem-image'>
            <img src='/items/item-1.jpg' alt='pic unable to load'/>
        </div>
        <div className='CartItem-info'>
            <h2>Apple Ipad pro</h2>
            <div className='info-stock'>In stock</div>
            <div className='item-actions'>
                <div className='item-quantity'>
                    <select name='quantity'>
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
            $324
        </div>
    </div>
  )
}

export default CartItem