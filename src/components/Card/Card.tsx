import React from "react";
import "../../index.css";
import {  IContributors } from "../../pages/Display/types";
import {ICardProps } from './types';


/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<ICardProps> = ({
  backgroundColor,
  children,
  repoData,
  error,
  contributors,
  imageLink,
  ...props
}) => {
  let [copy, setCopy] = React.useState("");
  const bgColor = `bg-${backgroundColor}-900`;
  if (children) {
    return <div {...props}>{children}</div>;
  }
  if (error) {
    return (
      <div className="shadow-lg rounded-md h-20 lg:w-1/3 md:w-1/2 w-4/5 bg-blue-600 flex flex-col justify-center">
        <p className="text-white text-center">No repo found for given link</p>
        <a href="/" className="text-white text-center mt-2 font-semibold">
          Return home
        </a>
      </div>
    );
  }

  if (!repoData) {
    return (
      <div className="w-20 h-20 rounded-full border-purple-800 border-t animate-spin">
        <div className="w-20 h-20 rounded-full border-purple-800 border-b"></div>
      </div>
    );
  }

  const copyToClip = (link: string) => {
    navigator.clipboard.writeText(link).then(
      function () {
        setCopy("Copied");
      },
      function () {}
    );
  };
  let {
    stargazers_count,
    html_url,
    clone_url,
    name,
    owner,
    description,
  } = repoData;
  return (
    <div
      className={`w-5/6 md:w-4/5 lg:w-1/2 lg:h-2/4  ${bgColor.toLowerCase()} rounded-lg mx-4 p-2 shadow-md grid lg:grid-cols-2 grid-cols-1 text-gray-100`}
    >
      <div className="flex flex-col w-full h-full p-4">
        <div className="lg:w-1/2 w-full flex flex-col h-full items-center lg:justify-start justify-center">
          <img
            src={`https://ipsicon.io/${imageLink}.svg`}
            alt="icon for card"
            className="h-16 w-16 object-center border border-gray-100 rounded-full"
          />
          <p className="text-lg capitalize">{name}</p>
          <p className="text-sm  text-center my-4">{description}</p>
          <div className="bg-gray-200 rounded-sm py-2 px-3">
            <a
              href={html_url}
              rel="noreferrer"
              target="_blank"
              className="text-gray-800 font-semibold mt-2 cursor-pointer"
            >
              Star this Repository
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-row w-full lg:justify-start justify-around">
          <div className="bg-gray-200 rounded-sm py-2 px-3">
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 font-semibold cursor-pointer"
            >
              View Repo
            </a>
          </div>
          <div className="bg-gray-200 rounded-sm py-2 px-3 lg:mx-2">
            <p className="text-gray-800 flex flex-row w-10 justify-around font-semibold cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              {stargazers_count}
            </p>
          </div>
          <div className="bg-gray-200 rounded-sm py-2 px-3 lg:mx-2">
            <p
              onClick={() => copyToClip(clone_url)}
              className="text-gray-800 flex flex-row w-10 justify-around font-semibold cursor-pointer"
            >
              {copy ? (
                copy
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              )}
            </p>
          </div>
        </div>
        <div className="w-full my-4">
          <p className="text-lg font-semibold tracking-wider">
            A repo by {owner.login}
          </p>
        </div>
        <div className="w-full flex flex-col">
          <h6 className="font-semibold ">Top contributors</h6>
          <hr className="border-gray-100 w-full " />
          <ol className="w-full ">
            {contributors &&
              contributors.map((p: IContributors, index: number) => {
                if (index > 9) return null;
                return <li key={index}>{p.login}</li>;
              })}
          </ol>
        </div>
        <div className="w-full flex flex-col items-center">
          <a
            href="/"
            className="px-4 py-2 rounded-sm bg-gray-100 text-gray-800 mt-6"
          >
            Generate your link
          </a>
        </div>
      </div>
    </div>
  );
};
