import React from 'react';
import './TextField.css';
import "../../index.css";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextField: React.FC<TextFieldProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div className=" w-40  outline-none flex flex-col">
      <label className="text-sm tracking-wide">{label}</label>
      <input className="h-8 w-full rounded-md border border-gray-600 text-lg tracking-wide px-2 " />
    </div>
  );
};
