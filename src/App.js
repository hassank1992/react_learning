import React,{useState} from 'react'

import './App.css';
import Header from './conponents/Header';
import CartItems from './conponents/CartItems';
import CartTotal from './conponents/CartTotal';
import data from './Data'
function App() {
  const [cartItems ,setCartItem]=useState(data);
const title_name ="Amazon Cart"
  return (

    <div className="App">
       <Header title={title_name}/>
       
       <div className='app-main'>
       <CartItems items={cartItems}/>
       <CartTotal/>
       </div>
    
    </div>
  );
}

export default App;
