import React from 'react';
import { Link } from 'react-router';

const styles = {
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
};

export default function CustomLink ({ to, children, ...props }) {
    return (
        <Link {...props}
            to={to}
            style={styles.link} >

            {children}
        </Link>
    );
}
