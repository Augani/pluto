import { Card } from "@components/Card/Card";
import Utils from "@utils/index";
import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {  IRepo } from "./types";
export interface IDisplayProps extends RouteComponentProps<any> {}

let initialUser: IRepo = {
  id: "",
  user: "",
  link: "",
  theme: "",
  repo: "",
};

const Display: React.FC<IDisplayProps> = (props: IDisplayProps) => {
  let [repoData, setRepoData] = React.useState(null);
  let [contributors, setContributors] = React.useState(null);
  let [user, setUser] = React.useState(initialUser);
  let [error, setError] = React.useState(false);

  const fetchRepo = async (repo: string, user: string) => {
    let data = await Utils.Api.Http(
      `https://api.github.com/repos/${user}/${repo}`
    );
    setRepoData(data);
  };

  const fetchContributors = async (repo: string, user: string) => {
    let data = await Utils.Api.Http(
      `https://api.github.com/repos/${user}/${repo}/contributors`
    );
    setContributors(data);
  };

  React.useEffect(() => {
    let id = props.match.params.id;
    if (id) {
      Utils.Db.getRepo(id)
        .then((b: any) => {
          if(!b.length)return setError(true);
          setUser(b[0]);
          fetchRepo(b[0].repo, b[0].user);
          fetchContributors(b[0].repo, b[0].user);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [props.match.params.id]);

  if(error){
    return (
      <div className="display w-screen h-screen flex flex-col justify-center items-center">
        <Card
        error={error}
        />
      </div>
    );
  }

  if(!repoData){
    return (
      <div className="display w-screen h-screen flex flex-col justify-center items-center">
        <Card
        />
      </div>
    );
  }

 

  return (
    <div className="display w-screen h-screen flex flex-col justify-center items-center">
      <Card
        backgroundColor={user.theme}
        imageLink={user.link}
        repoData={repoData}
        contributors={contributors}
      />
    </div>
  );
};

export default withRouter(Display);
