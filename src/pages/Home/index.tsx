import * as React from "react";
import Logo from "../../images/logo.svg";
import Share from "../../images/share.svg";
import { TextField, SelectField } from "@components/TextField/TextField";
import { Button } from "@components/Button/Button";
import Utils from "@utils/index";
import { Card } from "@components/Card/Card";

export interface IHomeProps {}

const initialFormData = {
  repo: "",
  theme: "Gray",
};

export default function Home(props: IHomeProps) {
  const [username, setUsername] = React.useState("");
  const [repos, setRepos] = React.useState([]);
  const [validUser, setValidUser] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [icon, setIcon] = React.useState("random");
  const [formData, setFormData] = React.useState(initialFormData);
  const [linkGenerated, setLinkGenerated] = React.useState("");

  const usernameChanged = (event: React.FormEvent<HTMLInputElement>) => {
    let name = event.currentTarget.value;
    setUsername(name);
  };

  const valueChanged = (event: React.FormEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value.trim(),
    });
  };

  const fetchRepos = async (username: string) => {
    let rep = await Utils.Api.Http(
      `https://api.github.com/users/${username}/repos`
    );
    if(rep && rep.length){
      let repNames = rep.map((rp: any) => {
        return rp.name;
      });
      setRepos(repNames);
    }
  };

  const generateIcon = () => {
    let randString = Utils.Hash.generateString(7);
    setIcon(randString.trim());
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

  React.useEffect(()=>{
    generateIcon();
  }, [])

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = {
      user: username,
      repo: formData.repo,
      theme: formData.theme,
      link: icon,
    };
    let response = await Utils.Db.saveRepo(data);
    if (Array.isArray(response)) {
      setLinkGenerated(response[0].link);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center overflow-y-auto">
      <nav className="flex flex-row items-center justify-between px-2 lg:px-10 w-full h-32 lg:absolute">
        <img alt="logo" src={Logo} className="lg:w-52 xl:w-56 w-32" />
        <Button variant="secondary" label="Buy me coffee" className="text-gray-50" />
      </nav>
      <main className="w-full lg:w-2/3 lg:h-full justify-center items-center flex flex-col lg:grid grid-cols-2 place-items-center">
        <header className="w-full h-full flex flex-col justify-center items-center">
          <img alt="main hero" className="lg:w-full w-3/4 mb-6" src={Share} />
          <h3 className="font-black text-gray-800 lg:text-4xl text-2xl tracking-wider text-center dark:text-gray-300">
            Generate shareable links <br /> for your repos
          </h3>
        </header>
        <form
          onSubmit={submitForm}
          className="md:w-1/2 lg:w-2/3 w-3/4 flex flex-col h-full justify-center items-center py-6 lg:py-0"
        >
          <TextField
            required
            onChange={usernameChanged}
            status={validUser}
            loading={loading}
            name="username"
            label="Your github username"
          />
          <SelectField
            required
            onChange={valueChanged}
            name="repo"
            options={repos}
            restrict
            label="Select your repo"
            className="capitalize"
          />
          <SelectField
            onChange={valueChanged}
            required
            restrict
            name="theme"
            label="Select theme"
            options={Utils.Theme.COLORS}
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
              className="text-gray-50"
            />
          </div>
          <Button type="submit" label="Generate Link" className="w-full mt-2 text-gray-50" />
          {linkGenerated && (
            <Card className="w-full mt-2 bg-purple-800 py-4 rounded-md flex flex-col items-center">
              <a rel="noreferrer" href={`/r/${linkGenerated}`} target="_blank" className="text-sm font-bold select-all text-white text-center">View repo</a>
              
            </Card>
          )}
        </form>
      </main>
    </div>
  );
}
