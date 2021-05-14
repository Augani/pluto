import React from 'react';
import './TextField.scss';
import "../../index.css";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export interface SelectFieldProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  /**
   * Button contents
   */
  label?: string;
  /**
   * Button contents
   */
   placeholder?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  ...props
}) => {
  return (
    <div className=" w-40  outline-none flex flex-col">
      <label className="text-sm tracking-wide">{label}</label>
      <input className="input" placeholder={placeholder} />
    </div>
  );
};

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  ...props
}) => {
  return (
    <div className=" w-40  outline-none flex flex-col">
      <label className="text-sm tracking-wide">{label}</label>
      <select className="input">

        </select>
    </div>
  );
};
