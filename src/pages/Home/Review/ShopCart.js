import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ShopCart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * .15).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div style={{ position: "sticky", top: 10, }} className='text-cyan-800'>
            <h3 className='text-2xl text-center font-bold p-5 mb-4'>Order Summary</h3>
            <div className='flex justify-around'>
                <p>Selected</p>
                <p>{quantity} {(quantity > 1) ? 'Items' : 'Item'}</p>
            </div>
            <div className='flex justify-around'>
                <p className='mt-5 mb-5'>Subtotal</p>
                <p className='mt-5 mb-5'>{total} Tk.</p>
            </div>
            <div className='flex justify-around'>
                <p>Shipping</p>
                <p>{shipping} Tk.</p>
            </div>
            <div className='flex justify-around'>
                <p className='mt-5 mb-5'>Vat/Tax</p>
                <p className='mt-5 mb-5'>{tax} Tk.</p>
            </div>
            <div className='flex justify-around'>
                <p className='font-bold'>Payable Total</p>
                <p className='font-bold'>{grandTotal} Tk.</p>
            </div>
            <Link to='/order' className="btn btn-block btn-succes mt-5 text-white">
                place order
                <HiArrowNarrowRight size={30} className='ml-2' />
            </Link>
        </div>
    );
};

export default ShopCart;