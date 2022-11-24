import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemProduct = ({ product, addProducts }) => {
    const [readMore, setReadMore] = useState(false);
    const { name, img, id, title } = product;

    const toggleBtn = () => {
        setReadMore(prevState => !prevState);
    }

    return (
        <div style={{ display: "flex" }}>
            <div className="bg-base-200 shadow-xl mt-5">
                <figure><img className='h48 w-48' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <Link to={'/product/' + id} className="text-lg font-bold">{name}</Link>
                    <div>
                        {
                            readMore ? title : title.substr(0, 100)
                        }
                        <button className='text-xl underline' onClick={toggleBtn}>
                            {readMore ? 'see less' : '...see more'}
                        </button>
                    </div>
                    <button onClick={() => addProducts(product)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemProduct;