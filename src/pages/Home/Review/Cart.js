import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const Cart = () => {
    return (
        <div >
            <FaCartPlus style={{ backgroundColor: 'red', position: 'sticky', top: '0', marginLeft: '20px', borderRadius: '0px' }} size={48} color='white' />
        </div>
    );
};

export default Cart;