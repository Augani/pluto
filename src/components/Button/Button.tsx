import React from 'react';


export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
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
  /**
   * Different modes of the button
   */
  variant?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  backgroundColor,
  label,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`button items-center w-40 h-12 text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${variant === 'primary' || !variant? 'bg-indigo-600 hover:bg-indigo-700': 'bg-gray-400 hover:bg-gray-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
