import React from 'react';
import './Card.scss';
import "../../index.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
   fontColor: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional click handler
   */
  imageSrc: string;
  /**
   * Optional click handler
   */
   name: string;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = ({
  backgroundColor,
  fontColor = 'white',
  imageSrc,
  name,
  ...props
}) => {
  const bgColor = `bg-${backgroundColor}-600`;
  return (
    <div className={`card ${bgColor} text-${fontColor}`}>
      <div className="flex flex-col w-full">
          <div className="w-1/2 flex flex-col justify-center items-center">
          <img className="h-16 w-16 object-center border border-gray-900 rounded-full" />
          <p className="text-lg">{name}</p>
          </div>
      </div>
      <div className="flex flex-col w-full">
          <div className="w-1/2 flex flex-col justify-center items-center">
            
          </div>
      </div>
    </div>
  );
};
