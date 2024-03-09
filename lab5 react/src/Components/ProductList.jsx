import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetProducts from '../Store/Actions/products';
import { incrementCartCount } from '../Store/Actions/addToCart';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.list);

    useEffect(() => {
        dispatch(GetProducts());
    }, [dispatch]);

    const handleAddToCart = () => {
        dispatch(incrementCartCount());
    };

    return (
        <div className="container">
            <h2 className='text-center mt-3'>Product List</h2>
            <hr />
            <div className="row">
                {products.map(product => (
                    <div className="col-12 col-md-4 mb-3" key={product.id}>
                        <div className="card" style={{ minHeight: '350px' }}>
                            <img src={product.imgUrl} className="card-img-top" alt="Product" style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Quantity: {product.quantity}</p>
                                <p className="card-text">Price: {product.price}</p>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
                                    <Link className='btn btn-dark w-100 mt-2' to={`/products/${product.id}`}>Show Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
