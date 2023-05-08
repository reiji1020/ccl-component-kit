import React from 'react';
import './button.css';

export type ButtonProps = {
    label: string,
    btnColor: string
}

export const Button: React.FC<ButtonProps> = ({label, btnColor}) => (
    <button className={`btn btn-${btnColor}`}>{label}</button>
);