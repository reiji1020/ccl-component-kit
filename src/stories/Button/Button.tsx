import React from 'react';
import './button.css';

type Props = {
    label: string,
    btnColor: string
}

const Button: React.FC<Props> = ({label, btnColor}) => (
    <button className={`btn btn-${btnColor}`}>{label}</button>
);

export default Button;