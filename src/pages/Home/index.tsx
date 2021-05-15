import * as React from "react";
import Logo from "../../images/logo.svg";
import Share from "../../images/share.svg";
import { TextField, SelectField } from "@components/TextField/TextField";
import { Button } from "@components/Button/Button";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
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
        <form className="md:w-1/2 lg:w-2/3 w-3/4 flex flex-col h-full justify-center items-center py-6 lg:py-0">
          <TextField status={false} loading={false} label="Your github username"  />
          <SelectField label="Select your repo"  />
          <SelectField label="Select theme"  />
          <SelectField label="Select Icon"  />
          <Button label="Generate Link" className="w-full mt-2" />
        </form>
      </main>
    </div>
  );
}
