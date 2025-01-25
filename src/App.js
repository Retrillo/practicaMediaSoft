import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import aboutImage from './assets/images/photo-svgrepo-com.svg'; 
import aboutImagelol from './assets/images/pineapple-svgrepo-com.svg'; 
import aboutImagekol from './assets/images/dinosaur-svgrepo-com.svg'; 
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/CartPage";
import AboutUs from "./components/AboutUs";  
import Contact from "./components/Contact";  
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Товар 1", price: 100, image: aboutImage }, 
        { id: 2, name: "Товар 2", price: 200, image: aboutImagelol },
        { id: 3, name: "Товар 3", price: 300, image: aboutImagekol },
    ];

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="home-page">
                                <h1>Каталог товаров</h1>
                                <div className="product-list">
                                    {products.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onAddToCart={addToCart}
                                        />
                                    ))}
                                </div>
                                <div className="form-container">
                                    <h2>Заполните форму</h2>
                                    <form>
                                        <input type="text" placeholder="Ваше имя" />
                                        <input type="email" placeholder="Ваш email" />
                                        <textarea placeholder="Ваше сообщение" />
                                        <button type="submit">Отправить</button>
                                    </form>
                                </div>
                            </div>
                        }
                    />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
