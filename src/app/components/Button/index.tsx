import React from 'react';

const Button = (props: { className: string, name: string }) => {
    return (
        <button className={props.className}>
            {props.name.replace(/([A-Z])/g, ' $1').trim()}
        </button>
    );
};

export default Button;
