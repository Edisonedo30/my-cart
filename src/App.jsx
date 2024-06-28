import { Route, Routes} from "react-router-dom";
import React from "react";
import "./App.css"
import { HomePage } from "./pages/home/HomePage";
import { CenterBar } from "./components/maincontent/CenterBar";
import { SingleProductList } from "./components/product/single/SingleProductList";
import {OneProduct} from "./components/product/single/OneProduct";
import { AddtoCart } from "./pages/addtocart/AddtoCart";
import { Product } from "./components/product/Product";
import { BuyProduct } from "./pages/addtocart/BuyProduct";

function App() {

  return (
    <div className="app"> 
        <Routes>
          <Route path="/" element={<HomePage/>}>
              <Route index element={<CenterBar/>}/> 
              <Route path="/addtocart" element={<AddtoCart/>}/>
              <Route path="/buy" element={<BuyProduct/>} />
              <Route path=":id">
                <Route index  element={<Product/>}/>
                  <Route path=":id" >
                      <Route index element={<SingleProductList />}/>
                      <Route path=":id">
                          <Route index element={<OneProduct/>}/>
                      </Route>
                  </Route>
              </Route>
          </Route>
        </Routes>    
    </div>
  );
}

export default App;
