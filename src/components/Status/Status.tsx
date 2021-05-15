import React from "react";

interface IStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Loading to show spinner when true and approval when false
   */
  loading?: boolean;
  /**
   * Show approval
   */
  approve?: boolean;
}

const Status = (props: IStatusProps) => {
  const { loading } = props;
  if (!loading) {
    return (
      <svg className="h-8 absolute right-2 my-auto top-3 text-purple-700" viewBox="0 0 20 20">
        <path
          fill="currentColor"
          d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
        ></path>
      </svg>
    );
  }
  return (
    <div className="absolute right-2 my-auto top-4 rounded-full animate-spin h-6 w-6 border-t border-gray-400 ">
      <div className="h-full w-full rounded-full border-b border-gray-400"></div>
    </div>
  );
};

export default Status;
