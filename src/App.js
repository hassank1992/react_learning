import React from 'react'

import './App.css';
import Header from './conponents/Header';
import CartItems from './conponents/CartItems';
import CartTotal from './conponents/CartTotal';
function App() {
  
const title_name ="Amazon Cart"
  return (

    <div className="App">
       <Header title={title_name}/>
       
       <div className='app-main'>
       <CartItems title={title_name}/>
       <CartTotal/>
       </div>
    
    </div>
  );
}

export default App;
