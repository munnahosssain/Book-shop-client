import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);
    const [readMore, setReadMore] = useState(false);
    const { name, title, writer } = books;

    useEffect(() => {
        const url = `https://book-shop-server.onrender.com/books/${bookId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [bookId]);

    const toggleBtn = () => {
        setReadMore(prevState => !prevState);
    }

    return (
        <div>
            <p>product id: {name}</p>
            <p>product id: {writer}</p>
            <div>
                {
                    readMore ? title : title?.substr(0, 100)
                }
                <button className='text-xl underline' onClick={toggleBtn}>
                    {readMore ? 'see less' : '...see more'}
                </button>
            </div>
        </div>
    );
};

export default BookDetails;