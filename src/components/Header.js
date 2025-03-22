import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <NavLink to="/competitions" style={styles.link}>Соревнования</NavLink>
                <NavLink to="/sportsmen" style={styles.link}>Спортсмены</NavLink>
                <NavLink to="/registration" style={styles.link}>
                    Регистрация спортсмена на соревнования
                </NavLink>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#f5f5f5',
        padding: '10px 20px',
        marginBottom: '20px'
    },
    nav: {
        display: 'flex',
        gap: '15px'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold'
    }
};

export default Header;
