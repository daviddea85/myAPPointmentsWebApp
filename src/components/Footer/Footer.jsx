import React from 'react';

export default function Footer ({ to, children, ...props }) {

    const styles = {
        backgroundColor: 'yellow',
        color: 'black',
        textAlign: 'center',
        height: '10vh'
    }

    return (
        <footer style={ styles }>
            <div>
                this is the footer
            </div>
        </footer>
    );
}
