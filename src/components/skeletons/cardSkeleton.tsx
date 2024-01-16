export default function CardSkeleton() {
  return (
    <div className='bg-[#0a0a0a] p-8 h-[258px] border rounded-md flex flex-col gap-3'>
      <div className='w-full rounded-full h-[18px] bg-[#c2c2c2] animate-pulse'></div>
      <div className='w-[70%] rounded-full h-[18px] bg-[#c2c2c2] animate-pulse'></div>
      <div className='w-32 rounded-full h-[16px] bg-muted-foreground animate-pulse'></div>

      <div className='flex gap-3'>
        <div className='w-24 rounded-full h-[16px] bg-[#ded7fe] animate-pulse'></div>
        <div className='w-24 rounded-full h-[16px] bg-[#ded7fe] animate-pulse'></div>
        <div className='w-24 rounded-full h-[16px] bg-[#ded7fe] animate-pulse'></div>
      </div>

      <div className='w-full rounded-full h-[16px] bg-[#c2c2c2] animate-pulse mt-4'></div>
      <div className='w-[80%] rounded-full h-[16px] bg-[#c2c2c2] animate-pulse'></div>
    </div>
  );
}
