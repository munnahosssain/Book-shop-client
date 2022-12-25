import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);
    console.log(books);
    useEffect(() => {
        const url = `https://book-shop-server.onrender.com/books/${bookId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [bookId]);

    return (
        <div>
            <p>product id: {books.name}</p>
            <p>product id: {books.writer}</p>
        </div>
    );
};

export default BookDetails;