
import { Mails } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { LinkedinIcon } from './icons';
import { buttonVariants } from './ui/button';

export const Footer = () => {
  return (
    <>
      <footer className='flex justify-between gap-10 border-t dark:border-[#262626] p-8 pb-12 w-full'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-semibold'>Let&apos;s talk</h1>
            <p className='font-extralight'>
              Send me message on LinkedIn or Email.
            </p>
          </div>

          <div className='flex flex-col gap-1'>
            <h3 className='font-light'>Built by Andre Ponce.</h3>
            <p>
              {' '}
              Model by{' '}
              <span className='text-theme-ligth-purple dark:text-primary-page'>
                Takuya Matsuyama.
              </span>
            </p>
          </div>
        </div>

        <div className='flex gap-4'>
          <Link
            href={'https://www.linkedin.com/in/andre-ponce-242498181/'}
            target='_blank'
            className={cn(
              buttonVariants({ variant: 'default' }),
              'bg-purple-500 hover:bg-purple-500 text-white'
            )}
          >
            <LinkedinIcon className='h-6 w-6' />
          </Link>
          <Link
            href={'mailto:asponceg@unah.hn'}
            target='_blank'
            className={cn(
              buttonVariants({ variant: 'default' }),
              'bg-purple-500 hover:bg-purple-500 text-white'
            )}
          >
            <Mails className='size-6' />
          </Link>
        </div>
      </footer>
    </>
  );
};
