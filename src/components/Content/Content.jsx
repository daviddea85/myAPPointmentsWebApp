import React from 'react';

export default function Content ({ to, children, ...props }) {

    const styles = {
        backgroundColor: 'blue',
        height: '100vh'
    }

    return (
        <div style={ styles }>
                this is the main content
            
        </div>
    );
}
