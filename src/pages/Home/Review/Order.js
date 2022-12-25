import React from 'react';
import ShopCart from './ShopCart';
import ReviewItems from './ReviewItems';
import useCart from '../../../hooks/useCart';
import useFetch from '../../../hooks/useFetch';

const Order = () => {
    const [products, setProducts] = useFetch();
    const [cart, setCart] = useCart(products);

    return (
        <div className="grid gap-4 grid-cols-2 py-30">
            <div>
                <ReviewItems />
            </div>
            <div style={{ position: "sticky", top: 10, }} className='text-cyan-800'>
                <ShopCart cart={cart} />
            </div>
        </div>
    );
};

export default Order;