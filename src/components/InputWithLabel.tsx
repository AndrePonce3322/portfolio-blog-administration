'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function InputWithLabel({ text, name }: { text: string, name: string }) {
  return (
    <div className='grid w-full max-w-lg items-center gap-2'>
      <Label htmlFor={text}>{text}</Label>
      <Input type='text' id={text} name={name} placeholder={text} className='bg-[#09090b] border-border'/>
    </div>
  );
}
