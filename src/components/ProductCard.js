import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3 style={styles.name}>{product.name}</h3>
            <p style={styles.price}>₽{product.price}</p>
            <button onClick={() => onAddToCart(product)} style={styles.button}>Добавить в корзину</button>
        </div>
    );
};

const styles = {
    card: {
        width: '250px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s',
    },
    image: {
        width: '100%',
        height: 'auto',
        marginBottom: '15px',
    },
    name: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    price: {
        fontSize: '16px',
        color: '#333',
        marginBottom: '15px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default ProductCard;
