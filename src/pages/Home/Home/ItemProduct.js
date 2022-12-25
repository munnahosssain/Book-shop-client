import { useContext } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COUNTER_CONTEXT } from '../../../App';
import { FaShoppingCart } from 'react-icons/fa';

const ItemProduct = ({ product, addProducts }) => {
    
    const { name, img, _id } = product;
    const [readMore, setReadMore] = useState(false);
    const { count, setCount } = useContext(COUNTER_CONTEXT);

    const toggleBtn = () => {
        setReadMore(prevState => !prevState);
    }

    return (
        <div style={{ display: "flex" }}>
            <div className="card w-96 bg-base-100">
                <figure><img className='h68 w-48' src={img} alt="book" /></figure>
                <div className="card-body">
                    <Link to={'/books/' + _id} className="text-base font-bold">{name}</Link>
                    {/* <p></p> */}
                    <div className="btn btn-outline btn-wide justify-center hover:bg-sky-700">
                        <button onClick={() => { addProducts(product); setCount(count + 1) }} className="flex items-center">
                            <FaShoppingCart className='mr-2' size={20} />Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemProduct;