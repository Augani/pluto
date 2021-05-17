import React from "react";
import "../../index.css";
import Status from "../Status/Status";
import { generateString } from "../../utils/Hash";
import {
  ITextFieldProps,
  ISelectFieldProps,
  ISelectInputProps,
  ISuggestionInputProps,
} from "./types";

/**
 * Main textfield component
 * @param label for the input
 * @param status which states whether the input is loading or has the expected value
 * @returns an input box
 */
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
  options = [],
  restrict,
  onChange,
  ...props
}) => {
  const listTitle = generateString(6);
  return (
    <div className="w-full flex flex-col my-2">
      <label className="tracking-wide text-sm dark:text-gray-100">
        {label}
      </label>
      {restrict ? (
        <SelectInput onChange={onChange} options={options} {...props} />
      ) : (
        <SuggestionInput listName={listTitle} options={options} />
      )}
    </div>
  );
};

const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  className,
  ...props
}) => {
  return (
    <select
      className={`${className} capitalize mt-1 px-4 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-lg border dark:text-gray-100 border-gray-300 dark:border-gray-100 h-12 focus:outline-none bg-gray-50 dark:bg-transparent md:text-2xl text-gray-900 rounded-md lg:mb-0`}
      {...props}
    >
      {options.length &&
        options.map((p: string) => {
          return (
            <option key={p} value={p}>
              {p}
            </option>
          );
        })}
    </select>
  );
};

const SuggestionInput: React.FC<ISuggestionInputProps> = ({
  listName,
  className,
  options,
}) => {
  return (
    <>
      <input
        list={listName}
        className={`${className} mt-1 px-4 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-lg border dark:text-gray-100 border-gray-300 dark:border-gray-100 h-12 focus:outline-none bg-gray-50 dark:bg-transparent md:text-2xl rounded-md lg:mb-0`}
      />
      {options && <DataList options={options} label={listName} />}
    </>
  );
};

const DataList: React.FC<ISuggestionInputProps> = ({ label, options }) => {
  return (
    <datalist id={label}>
      {options &&
        options.map((p: string) => {
          return <option key={p} value={p} />;
        })}
    </datalist>
  );
};
