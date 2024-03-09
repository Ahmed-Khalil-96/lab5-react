import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementCartCount } from '../Store/Actions/addToCart';

export default function ShowProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});

    const getProductById = () => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getProductById();
    }, [id]);

    const handleAddToCart = () => {
        dispatch(incrementCartCount());
    };

    return (
        <div>
            <div className="card">
                <img src={product.imgUrl} className="card-img-top" alt="Product" style={{ width: '50%', margin: 'auto' }} />
                <hr />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">Price: {product.price} $</p>
                    <div className="d-flex justify-content-center">
                        <Link to="/" className="btn btn-dark me-3">Go to Products</Link>
                        <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
