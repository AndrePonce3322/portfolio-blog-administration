import { Blocks, Cuboid, Hammer } from 'lucide-react';
import Time from './time';

export default function Header() {
  return (
    <header className='flex justify-between flex-col md:flex-row gap-1' lang='en'>
      <h1 className='text-4xl md:text-5xl font-bold'>
        <span className='text-[#f5f5f5]'>Blog builder</span>
      </h1>

      <div className='flex text-muted-foreground text-sm items-center tracking-tight' lang='es'>
        <Time />
      </div>
    </header>
  );
}
