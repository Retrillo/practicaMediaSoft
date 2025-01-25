import React from "react";
import "./CartPage.css"; 

const CartPage = ({ cart, onRemoveFromCart }) => {
    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            {cart.length === 0 ? (
                <p className="empty-cart">Ваша корзина пуста.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-item-image"
                            />
                            <div className="cart-details">
                                <h2>{item.name}</h2>
                                <p>Цена: {item.price} ₽</p>
                                <p>Количество: {item.quantity}</p>
                                <button
                                    className="remove-button"
                                    onClick={() => onRemoveFromCart(item.id)}
                                >
                                    Убрать 1 шт.
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
