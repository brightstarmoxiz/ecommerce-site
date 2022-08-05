import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import HomeScreen from './screens/HomeScreen'
import "./index.css"
function App() {

  return (
    <>

    <BrowserRouter>
    
    <div className="grid-container">
      <header className="row">
          <div>
              <a className="brand" href="index.html"> Best Collection</a>
          </div>

          <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign in</a>
          </div>
          </header>
          <main>
            <Routes>
              <Route>
            <Route path="/product/:id" element={<ProductScreen/>}></Route>
             <Route path="/"element={<HomeScreen/>}/>
             </Route>
             </Routes>
          </main>
          
      <footer className="row center">
            All right  reserved
      </footer>
    </div>
    </BrowserRouter>
   </>
  );
}

export default App;
