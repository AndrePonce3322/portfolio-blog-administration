import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const options = [
  { name: 'Frontend' },
  { name: 'Backend' },
  { name: 'DevOps' },
  { name: 'Fullstack' },
  { name: 'UI/UX' },
  { name: 'Seguridad' },
  { name: 'Otros' },
];

export default function Tags({
  handleClick,
  tags,
}: {
  handleClick: (name: string) => void;
  tags: string[];
}) {
  return (
    <div className='flex gap-3 flex-wrap'>
      {options.map((option) => (
        <Button
          key={option.name}
          type='button'
          onClick={() => handleClick(option.name)}
          variant={'outline'}
          className={cn(
            'bg-[#09090b] hover:bg-[#151515] hover:text-[#f5f5f5] h-[25px] text-xs font-normal border-border',
            tags.includes(option.name) && 'bg-purple-500 hover:bg-purple-500'
          )}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
}
