import React from 'react';
import './Card.scss';
import "../../index.css";

export interface IRepoData {
  
}

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Color of the texts
   */
   fontColor: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * The repository data
   */
  repoData: IRepoData;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<ICardProps> = ({
  backgroundColor,
  fontColor = 'white',
  ...props
}) => {
  const bgColor = `bg-${backgroundColor}-600`;
  return (
    <div className={`card ${bgColor} text-${fontColor}`}>
      <div className="flex flex-col w-full">
          <div className="w-1/2 flex flex-col justify-center items-center">
          <img className="h-16 w-16 object-center border border-gray-900 rounded-full" />
          <p className="text-lg"></p>
          </div>
      </div>
      <div className="flex flex-col w-full">
          <div className="w-1/2 flex flex-col justify-center items-center">
            
          </div>
      </div>
    </div>
  );
};
