import React from 'react';

const ItemProduct = ({ product, addProducts }) => {
    const { name, img } = product
    return (
        <div>
            <p>{name}</p>
            <img src={img} alt="" />
            <button onClick={() => addProducts(product)}>Clicked</button>
        </div>
    );
};

export default ItemProduct;