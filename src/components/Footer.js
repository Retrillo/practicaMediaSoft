import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
               
                <div style={styles.logoSection}>
                    <h2 style={styles.logo}>Продажа товаров</h2>
                    <p style={styles.text}>Лучшие товары для вашего дома. Мы заботимся о вашем удобстве и комфорте.</p>
                </div>


                
                <div style={styles.contactSection}>
                    <h3 style={styles.sectionTitle}>Контакты</h3>
                    <p style={styles.text}>Телефон: +7 (123) 456-78-90</p>
                    <p style={styles.text}>Email: support@company.com</p>
                </div>

             
                <div style={styles.socialSection}>
                    <h3 style={styles.sectionTitle}>Следите за нами</h3>
                    <div style={styles.socialIcons}>
                        <a href="#" style={styles.socialIcon}>Teglegram
                            
                        </a>
                        <a href="#" style={styles.socialIcon}>Instagram
                            (Запрещен в РФ)</a>
                        <a href="#" style={styles.socialIcon}>Twitter
                            (Запрещен в РФ)</a>
                    </div>
                </div>
            </div>

            <div style={styles.footerBottom}>
                <p style={styles.bottomText}>Продажа товаров продадим даже себя. Все права защищены.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#282828',
        color: 'white',
        padding: '40px 20px',
        marginTop: '40px',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    logoSection: {
        flex: '1 1 300px',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    text: {
        fontSize: '14px',
        marginTop: '10px',
        color: '#ccc',
    },
    linksSection: {
        flex: '1 1 250px',
    },
    sectionTitle: {
        fontSize: '18px',
        marginBottom: '15px',
        fontWeight: 'bold',
    },
    linksList: {
        listStyle: 'none',
        padding: 0,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        fontSize: '14px',
        marginBottom: '10px',
        transition: 'color 0.3s',
    },
    linkHover: {
        color: '#ff9900',
    },
    contactSection: {
        flex: '1 1 250px',
    },
    socialSection: {
        flex: '1 1 250px',
    },
    socialIcons: {
        display: 'flex',
        gap: '10px',
    },
    socialIcon: {
        padding: '10px 20px',
        backgroundColor: '#444',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        fontSize: '14px',
    },
    footerBottom: {
        textAlign: 'center',
        marginTop: '30px',
    },
    bottomText: {
        fontSize: '14px',
        color: '#ccc',
    },
};

export default Footer;
