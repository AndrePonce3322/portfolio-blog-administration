'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { MyBlogContext } from '@/context/blog-context';
import { Trash } from 'lucide-react';
import { useContext } from 'react';
import { toast } from 'sonner';

export function AlertDialogDelete({ id }: { id: string }) {
  const { deleteBlogById } = useContext(MyBlogContext);

  // Función para eliminar un blog
  const onDelete = (id: string) => {
    toast.success('Blog eliminado correctemente');
    deleteBlogById(id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size={'icon'}
          variant={'destructive'}
          className='scale-75 opacity-90'
        >
          <Trash width={18} height={18} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente el
            blog de la base de datos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => onDelete(id)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
