import React from 'react';

export default function Header ({ to, children, ...props }) {

    const styles = {
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        height: '10vh'
    }

    return (
        <header style={ styles }>
            <div>
                header 
            </div>
        </header>
    );
}
