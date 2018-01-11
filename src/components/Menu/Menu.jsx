import React from 'react';

export default function Menu ({ to, children, ...props }) {

    const styles = {
        backgroundColor: 'green',
        height: 'auto'
    }

    return (
        <div style={ styles }>
                this is the menu
        </div>
    );
}
