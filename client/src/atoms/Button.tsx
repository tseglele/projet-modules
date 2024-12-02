import React from 'react';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button' }) => (
  <button
  type={type}
  className=""
>
  {text}
</button>
);

export default Button;
