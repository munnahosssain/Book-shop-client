import React from 'react';
import Cart from '../Review/Cart';
import ItemProduct from './ItemProduct';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';

const Home = () => {
    const [product, setProduct] = useFetch();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = product.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [product]);

    const addProducts = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='flex'>
            <div className='flex grid gap-y-8 gap-x-8 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:px-48 md:px-60 sm:px-10'>
                {
                    product.map(product =>
                        <ItemProduct
                            key={product._id}
                            product={product}
                            addProducts={addProducts}
                        />
                    )
                }
            </div>
            <div>
                <Link to='/order'>
                    <Cart cart={cart} />
                </Link>
            </div>
        </div>
    );
};

export default Home;