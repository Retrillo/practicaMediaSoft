import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.navLinks}>
                <Link to="/" style={styles.navLink}>Главная</Link>
                <Link to="/about" style={styles.navLink}>О нас</Link>
                <Link to="/contact" style={styles.navLink}>Контакты</Link>
            </div>
            <div className="cartButton">
                <Link to="/cart" className="cartLink">Корзина</Link>
            </div>
            
            <div className="mobileCartButton">
                <Link to="/cart" className="cartLink">Корзина</Link>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    navLinks: {
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flexGrow: 1,
    },
    navLink: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px 20px',
        transition: 'background-color 0.3s',
    },
};

export default Navbar;
