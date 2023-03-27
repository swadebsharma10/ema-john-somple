import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[]);

    // setCart er UseEffect
    useEffect(()=>{
       
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart);
        for(const id in storedCart){
            // console.log(id);
            const savedProduct = products.find(product => product.id === id)
            // console.log(savedProduct);
            if(savedProduct){
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
            
        }
        setCart(savedCart);

    }, [products])

    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div>
                
                
               <div className='products-container'>
                {
                products.map(product => <Product
                  key={product.id}  
                  product ={product}
                  handleAddToCart={handleAddToCart}
                    ></Product>)
                }
               </div>
            </div>

             <div className="cart-container">
                <Cart cart ={cart}></Cart>
             </div>
        </div>
    );
};

export default Shop;