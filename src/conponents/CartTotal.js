import "./CartTotal.css"

function CartTotal({items}){
 
const getTotalPrice=()=>{
    let total=0;
    items.forEach((item) => {
        total+=item.price * item.quantity;
    });
    return total.toFixed(2);
}
const getTotalQuantity=()=>{
    let total=0;
    items.forEach((item) => {
        total+=item.quantity;
    });
    return total;
}
return(  <div className='cartTotal'>
    <h3>
    <span> Sub Total({getTotalQuantity()} items):${getTotalPrice()}</span>
       
    </h3>
        <button>
            Proceed to Checkout
        </button>
    </div>)
   

}
export default CartTotal;