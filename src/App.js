import React from 'react'

import './App.css';
import Header from './conponents/Header';
import CartItem from './conponents/CartItem';
import CartTotal from './conponents/CartTotal';
function App() {
  
const title_name ="Amazon Cart"
  return (

    <div className="App">
       <Header title={title_name}/>
       
       <div className='app-main'>
       <CartItem title={title_name}/>
       <CartTotal/>
       </div>
    
    </div>
  );
}

export default App;
