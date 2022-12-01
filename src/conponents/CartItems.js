import "./CartItems.css"
import CartItem from "./CartItem"
function CartItems({title}){
    return(

    <div className='cartItems'>
        <h1>{title}</h1>
        
        <CartItem/>
        </div>
     
    )
}
export default CartItems