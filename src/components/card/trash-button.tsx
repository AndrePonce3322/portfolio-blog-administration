import { AlertDialogDelete } from '../alert-dialog';

export default function TrashButton({ id }: { id: string }) {
  return (
    <div
      className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-150'
      onClick={(e) => e.preventDefault()}
    >
      <AlertDialogDelete id={id} />
    </div>
  );
}
