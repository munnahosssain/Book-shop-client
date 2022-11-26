import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const ProductDetails = () => {

    const [product, setProduct] = useFetch();

    const { productId } = useParams();
    // const [product, setProduct] = useState([]);

    console.log(product);

    // const findProduct = [...product];

    const products = product.find(pd => pd.id === productId);

    return (
        <div>
            <p>product id: {product}</p>
        </div>
    );
};

export default ProductDetails;