import { Badget } from '@/components/badget';
import Link from 'next/link';

export default function BlogHeader({
  timestamp,
  title,
  tags,
}: {
  timestamp: number;
  title: string;
  tags: string[];
}) {
  return (
    <>
      <time className='text-sm text-muted-foreground flex justify-between items-center'>
        {timestamp && (
          <span>
            {'Publicado el '}
            {new Date(timestamp).toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        )}

        <Link
          href={'/'}
          className='underline text-zinc-300 hover:text-opacity-80'
        >
          Home
        </Link>
      </time>
      <header className='text-xl md:text-3xl font-medium flex flex-col gap-4'>
        <span>{title}</span>
        <div className='flex gap-3 flex-wrap'>
          {tags && tags.map((tag: string) => <Badget key={tag} text={tag} />)}
        </div>
      </header>
    </>
  );
}
