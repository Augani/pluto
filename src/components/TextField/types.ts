import React from "react";

export interface ISuggestionInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  listName?: string;
  options: string[];
  label?: string;
}

export interface ISelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  options: string[];
}

export interface ISelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Button text
   */
  label?: string;
  /**
   * Options of selectable values
   */
  options?: string[];
  /**
   * Allow free entry based on suggestions
   */
  restrict?: boolean;
}

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
