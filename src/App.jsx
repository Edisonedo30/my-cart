import { Route, Routes} from "react-router-dom";
import React from "react";
import "./App.css"
import { HomePage } from "./pages/home/HomePage";
import { MainContentBar } from "./components/MainContentBar";
import { CenterBar } from "./components/CenterBar";
import { SingleProductList } from "./components/product/single/SingleProductList";
import {OneProduct} from "./components/product/single/OneProduct";
import { AddtoCart } from "./pages/addtocart/AddtoCart";

function App() {
      
  return (
    <div className="app"> 
        <Routes>
          
          <Route path="/" element={<HomePage/>}>
              <Route index element={<CenterBar/>}/> 
              <Route path="/addtocart" element={<AddtoCart/>}/>

                <Route path=":id">
                  <Route index  element={<MainContentBar/>}/>

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
