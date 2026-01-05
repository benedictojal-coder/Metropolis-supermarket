import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded shadow-sm'>
      {/* 2. Changed <a> to <Link> and 'href' to 'to' */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' alt={product.name} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title as='div' className='product-title mb-2'>
            <strong className="text-dark">{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h4' className='mb-3 text-success'>
          Ksh {product.price}
        </Card.Text>

        <Button 
          className='btn-block w-100' 
          type='button' 
          style={{ backgroundColor: '#28a745', border: 'none' }}
          disabled={product.countInStock === 0}
        >
          {product.countInStock > 0 ? 'Add To Cart' : 'Out of Stock'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;