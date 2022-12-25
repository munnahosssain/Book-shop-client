import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemProduct = ({ product, addProducts }) => {
    
    const { name, img, _id, title } = product;

    return (
        <div style={{ display: "flex" }}>
            <div className="bg-base-200 shadow-xl mt-5">
                <figure><img className='h48 w-48' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <Link to={'/book/' + _id} className="text-lg font-bold">{name}</Link>
                    
                    <button onClick={() => addProducts(product)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemProduct;