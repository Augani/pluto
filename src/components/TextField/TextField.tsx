import React from "react";
import "../../index.css";
import Status from "@components/Status/Status";

export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The title of the input
   */
  label?: string;
  /**
   * Show spinner or not
   */
   loading?: boolean;
  /**
   * Show status or not
   */
  status?: boolean;
}

export interface ISelectFieldProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Button text
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const TextField: React.FC<ITextFieldProps> = ({
  label,
  placeholder,
  className,
  loading,
  status,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col ">
      <label className="tracking-wide dark:text-gray-100">{label}</label>
      <div className="w-full relative">
      <input
        className={`${className} w-full mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-lg border dark:text-gray-100 border-gray-300 dark:border-gray-100 h-12 focus:outline-none bg-gray-50 dark:bg-transparent md:text-xl rounded-md `}
        placeholder={placeholder}
        {...props}
      />
       {status && <Status loading={loading} />}
      </div>
     
    </div>
  );
};

export const SelectField: React.FC<ISelectFieldProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col my-2">
      <label className="tracking-wide text-sm dark:text-gray-100">
        {label}
      </label>
      <div
        className={`${className} mt-1 px-4 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-lg border dark:text-gray-100 border-gray-300 dark:border-gray-100 h-12 focus:outline-none bg-gray-50 dark:bg-transparent md:text-2xl rounded-md lg:mb-0`}
        {...props}
      ></div>
    </div>
  );
};
