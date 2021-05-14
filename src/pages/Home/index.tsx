import * as React from 'react';
import Logo from '../../images/logo.svg';
import Share from '../../images/share.svg';
import './index.scss'
import {TextField, SelectField} from '../../components/TextField/TextField';
import {Button} from '../../components/Button/Button';


export interface IHomeProps {
}





export default function Home (props: IHomeProps) {
  return (
    <div className='h-full w-full flex flex-col items-center'>
           <nav className='flex px-4 w-full h-20'>
                <img alt='logo' src={Logo} className='lg:w-40 xl:w-56 w-20' />
           </nav>
           <main className='main'>
                <img alt='main image' className='mb-4'  src={Share} />
                <h3 className='font-black text-gray-800 lg:text-4xl text-lg tracking-wider text-center'>Generate shareable links <br/> for your repos</h3>
                <form className='w-full flex lg:flex-row flex-col justify-around lg:w-2/3 my-4'>
                <TextField />
                <SelectField/>
                <Button label='Generate Link'/>
                </form>
           </main>
    </div>
  );
}
