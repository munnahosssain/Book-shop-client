import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { bookId } = useParams();
    const [product, setProduct] = useState([]);
    const { name, img, writer, publisher, categorie, Language, title, price } = product;

    useEffect(() => {
        fetch(`https://book-shop-server.onrender.com/books/${bookId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [bookId]);

    return (
        // <div classNameName='container mx-auto'>
        //     <img src={img} alt="" />
        //     <p>Name : {name}</p>
        //     <p>Writer : {writer}</p>
        //     <p>Publisher : {publisher}</p>
        //     <p>Categories : {categorie}</p>
        //     <p>Language : {Language}</p>
        //     <p>Price : {price}</p>
        //     <p>Title : {title}</p>
        // </div>
        <div className="container mx-auto textcenter grid gap-x-8 gap-y-4 grid-cols-3">
            <div className='flex justify-end'>
                <img src={img} alt="book" />
            </div>
            <div className='bg-white-600'>
                <p>{name}</p>
                <p>লেখক : {writer}</p>
                <p>প্রকাশনী : {publisher}</p>
                <p>বিষয় : {categorie}</p>
                <p>ভাষা : {Language}</p>
                <p>মূল্য : {price}</p>
                <p>{title.length > 20 ? title.slice(0, 150) + '...' : name}</p>
            </div>
            <div className='bg-slate-600'>
                abc
            </div>
        </div>
    );
};

export default ProductDetails;