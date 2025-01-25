import React from "react";
import aboutImage from '../assets/images/8546b057-ad5f-4a8b-9b4c-a6053c6f4fa9.jpg'; 
import './AboutUs.css'; 

const AboutUs = () => {
    return (
        <div>
            <h2>О нас</h2>
            <p>Мы — лидеры в продаже бытовой техники. Мы предлагаем широкий ассортимент товаров, высококачественные бренды и отличный сервис. Наши преимущества:</p>
            <ul>
                <li>Широкий выбор товаров</li>
                <li>Конкурентные цены</li>
                <li>Быстрая доставка</li>
                <li>Гарантия качества</li>
            </ul>
            <img src={aboutImage}  className="about-image" />
        </div>
    );
};






const styles = {
    
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    text: {
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '15px',
    },
};

export default AboutUs;
