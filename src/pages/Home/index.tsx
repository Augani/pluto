import * as React from "react";
import Logo from "../../images/logo.svg";
import Share from "../../images/share.svg";
import { TextField, SelectField } from "@components/TextField/TextField";
import { Button } from "@components/Button/Button";
import { Http } from "@utils/Api";
import { COLORS } from "@utils/Theme";
import { generateString } from "@utils/Hash";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const [username, setUsername] = React.useState("");
  const [repos, setRepos] = React.useState([]);
  const [validUser, setValidUser] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [icon, setIcon] = React.useState("random");

  const usernameChanged = (event: React.FormEvent<HTMLInputElement>) => {
    let name = event.currentTarget.value;
    setUsername(name);
  };

  const fetchRepos = async (username: string) => {
    let rep = await Http(`https://api.github.com/users/${username}/repos`);
    let repNames = rep.map((rp: any) => {
      return rp.name;
    });
    setRepos(repNames);
  };

  const generateIcon = () => {
    let randString = generateString(7);
    setIcon(randString);
  };

  React.useEffect(() => {
    if (!username) {
      setValidUser(false);
      return;
    }
    if (repos.length) {
      setValidUser(true);
      setLoading(false);
    }
    fetchRepos(username);
  }, [username, repos.length]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    
  }

  return (
    <div className="h-full w-full flex flex-col items-center overflow-y-auto">
      <nav className="flex flex-row items-center justify-between px-2 lg:px-10 w-full h-32 lg:absolute">
        <img alt="logo" src={Logo} className="lg:w-52 xl:w-56 w-32" />
        <Button variant="secondary" label="Buy me coffee" />
      </nav>
      <main className="w-full lg:w-2/3 lg:h-full justify-center items-center flex flex-col lg:grid grid-cols-2 place-items-center">
        <header className="w-full h-full flex flex-col justify-center items-center">
          <img alt="main hero" className="lg:w-full w-3/4 mb-6" src={Share} />
          <h3 className="font-black text-gray-800 lg:text-4xl text-2xl tracking-wider text-center dark:text-gray-300">
            Generate shareable links <br /> for your repos
          </h3>
        </header>
        <form onSubmit={submitForm} className="md:w-1/2 lg:w-2/3 w-3/4 flex flex-col h-full justify-center items-center py-6 lg:py-0">
          <TextField
          required
            onChange={usernameChanged}
            status={validUser}
            loading={loading}
            label="Your github username"
          />
          <SelectField
            required
            options={repos}
            label="Select your repo"
            className="capitalize"
          />
          <SelectField
          required
            label="Select theme"
            options={COLORS}
            className="capitalize"
          />
          <div className="flex flex-row h-12 w-full mb-4">
            <img
              alt="icon"
              className="h-full w-12 rounded-full mr-4"
              src={`https://ipsicon.io/${icon}.svg`}
            />
            <Button
              variant="secondary"
              onClick={generateIcon}
              label="Generate Icon"
            />
          </div>
          <Button type="submit" label="Generate Link" className="w-full mt-2" />
        </form>
      </main>
    </div>
  );
}
