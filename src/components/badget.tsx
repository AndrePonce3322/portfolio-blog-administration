export const Badget = ({ text }: { text: string }) => {
  return (
    <span className='flex items-center rounded-full border border-transparent bg-[#ded7fe] px-2.5 py-0.5 text-xs font-semibold text-primary-foreground'>
      {text}
    </span>
  );
};
