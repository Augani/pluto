import { IRepoData, IContributors } from "../../pages/Display/types";
export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * The repository data
     */
    repoData?: IRepoData | null;
    /**
     * The contributors data
     */
    contributors?: IContributors[] | null;
    /**
     * The icon for the repo
     */
    imageLink?: string;
  
    error?: boolean;
  }