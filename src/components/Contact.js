import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-text">
        <h2>Контакты</h2>
        <p>
          Наш офис находится в центре города. Мы всегда рады помочь вам и
          ответить на все вопросы. Свяжитесь с нами через формы на сайте или
          по телефону.
        </p>
        <p>Адрес: ул. Примерная, дом 1, Москва, Россия</p>
        <p>Телефон: +7 (123) 456-78-90</p>
        <p>Email: support@company.com</p>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb="
          title="Map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
