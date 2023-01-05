import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import OlxClone from './OlxClone';
import ProductDetails from './content/ProductDetails/ProductDetails';
import { MyProducts } from './content/MyProducts';
import UpdateProduct from './content/UpdateProduct/UpdateProduct';
import CartsProduct from './content/CartsProduct';


const OlxRouter = () => {
  return (


    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<OlxClone />} />
        <Route path='/productDetails/:productId' index element={<ProductDetails />} />
        <Route path="/myproducts/:uid" element={<MyProducts />} />
        <Route path='/updateproduct/:docref' element={<UpdateProduct />}  />
        <Route path='/cart' element={<CartsProduct />} />


      </Routes>
    
    </BrowserRouter>
  )
}

export default OlxRouter