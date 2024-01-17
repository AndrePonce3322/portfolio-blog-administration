'use client';
import { InputWithLabel } from '@/components/InputWithLabel';
import MarkDownEditor from '@/components/markdown/editor';
import { Button } from '@/components/ui/button';
import { FormEvent, useContext, useRef, useState } from 'react';
import { toast } from 'sonner';
import Tags from './tags';
import { MyBlogContext } from '@/context/blog-context';

export default function Form() {
  const formRef = useRef(null);
  const [value, setValue] = useState('' as string | undefined);
  const [tags, setTags] = useState([] as string[]);
  const { create } = useContext(MyBlogContext);

  const onsubmit = async (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      titulo: { value: string };
      descripcion: { value: string };
    };

    const titulo = target.titulo.value;
    const descripcion = target.descripcion.value;

    if (!titulo || !descripcion || !value)
      return toast.error('Todos los campos son obligatorios');

    create({
      content: value,
      description: descripcion,
      tags,
      title: titulo,
    });

    if (formRef.current) {
      (formRef.current as HTMLFormElement).reset();
      setValue('');
      toast.success('Blog creado correctamente');
    }
  };

  const onChange = (e: string | undefined) => {
    setValue(e);
  };

  const handleTagClik = (name: string) => {
    const exist = tags.includes(name);

    if (exist) {
      return setTags((prev) =>
        prev.filter(
          (tag) => tag.toLocaleLowerCase() !== name.toLocaleLowerCase()
        )
      );
    }

    setTags((prev) => [...prev, name]);
  };

  return (
    <form onSubmit={onsubmit} ref={formRef}>
      <div className='flex flex-col gap-6'>
        <InputWithLabel text='Título' name='titulo' />
        <InputWithLabel text='Descripción' name='descripcion' />
        <Tags handleClick={handleTagClik} tags={tags} />
        <MarkDownEditor onChange={onChange} value={value} />
      </div>

      <Button
        variant={'outline'}
        className='text-[#f5f5f5] hover:text-[#f5f5f5] bg-[#0a0a0a] hover:bg-[#0a0a0a] w-full mt-4 border-border'
        type='submit'
      >
        Publicar
      </Button>
    </form>
  );
}
