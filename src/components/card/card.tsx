import Link from 'next/link';
import { Badget } from '../badget';
import TrashButton from './trash-button';

interface CardProps {
  id: string;
  title: string;
  timestamp: string | number;
  tags: string[];
  description: string;
}

export default function Card({
  id,
  title,
  timestamp,
  tags,
  description,
}: CardProps) {
  const time = new Date(timestamp);
  const date = time.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
      className='rounded-md border bg-[#0a0a0a] p-8 relative group'
      href={`/blog/${id}`}
    >
      <TrashButton id={id} />
      <h2 className='line-clamp-2 text-2xl font-semibold tracking-tight'>
        {title}
      </h2>
      {/* Date y TAGS*/}
      <div className='mt-2 flex md:items-center gap-2 md:gap-4 tracking-tight flex-col flex-wrap md:flex-row cursor-text select-text'
      onClick={(e) => e.preventDefault()}
      >
        <time className='text-sm font-light text-muted-foreground'>{date}</time>

        <div className='flex gap-2 flex-wrap'>
          {tags.map((tag) => (
            <Badget key={tag} text={tag} />
          ))}
        </div>
      </div>

      <p onClick={(e) => e.preventDefault()} className='mt-4 font-light cursor-text select-text'>{description}</p>
    </Link>
  );
}
