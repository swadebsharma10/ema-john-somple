import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch('../../../public/products.json')
        .then(res => res.json())
        .then(data =>setProducts(data.slice(0,12)))
    },[])
    return (
        <div className='shop-container'>
            <div>
                <h3>Products are here: {products.length}</h3>
                
               <div className='products-container'>
                {
                products.map(product => <Product
                  key={product.id}  
                  product ={product}
                    ></Product>)
                }
               </div>
            </div>

             <div className="cart-container">
                <h3>Cart is Here</h3>
             </div>
        </div>
    );
};

export default Shop;