import "./CartItems.css"
import CartItem from "./CartItem"
function CartItems({items}){
//console.log("this is what in cart item ",items)
    return(

    <div className='cartItems'>
        <h1>Shopping Cart</h1>
        {items.map((item,index)=>
        <CartItem item={item} key={index}
        // image={item.image}
        // price={item.price}
        // quantity={item.quantity}
        // stock={item.stock}
        // title={item.title}
        />)}
        
        </div>
     
    )
}
export default CartItems