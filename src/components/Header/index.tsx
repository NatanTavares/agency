import { Button, IconButton } from '../Form';
import { Navigation } from './Navigation';
import { MagnifyingGlass } from 'phosphor-react';


export const Header: React.FC = () => {
  return (
    <header className='flex w-full items-center text-zinc-700'>
      <h1 className='text-zinc-500 text-3xl font-bold'>Roots</h1>

      <div className='flex-1 px-20'>
        <Navigation />
      </div>

      <div className='flex gap-5'>
        <IconButton icon={MagnifyingGlass} />
        <Button label='Get a Quote' />
      </div>
    </header>
  );
};
