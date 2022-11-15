import React, { useEffect, useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <button class="btn btn-primary">Button</button>
            <h1 className=''>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

export default Home;