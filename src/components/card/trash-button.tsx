'use client';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { useContext } from 'react';
import { MyBlogContext } from '@/context/blog-context';
import { toast } from 'sonner';

export default function TrashButton({ id }: { id: string }) {
  const { deleteBlogById } = useContext(MyBlogContext);

  // Función para eliminar un blog
  const onDelete = (id: string) => {
    const deleteBlog = () => {
      toast.success('Blog eliminado correctemente');
      deleteBlogById(id);
    };

    confirm('¿Estás seguro de eliminar este blog?') && deleteBlog();
  };

  return (
    <div
      className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-150'
      onClick={(e) => e.preventDefault()}
    >
      <Button
        size={'icon'}
        variant={'destructive'}
        className='scale-75 opacity-90'
        onClick={() => onDelete(id)}
      >
        <Trash width={18} height={18} />
      </Button>
    </div>
  );
}
