import Container from '../container';

export default function BlogPageSkeleton() {
  return (
    <Container>
      <section className='w-[90%] md:w-[70%] flex flex-col gap-6 text-white min-h-[80vh] pb-10 relative'>
        <div className='h-[14px] w-2/6 rounded-full bg-gray-500 animate-pulse'></div>
        <div className='h-4 w-3/4 rounded-full bg-gray-500 animate-pulse'></div>
        <div className='flex gap-3'>
          <div className='h-4 w-[80px] rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-[80px] rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-[80px] rounded-full bg-gray-500 animate-pulse'></div>
        </div>
        <hr />

        <div className='flex flex-col gap-4'>
          <div className='h-4 w-1/2 rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-1/3 rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-1/4 rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-1/3 rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-1/4 rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-1/2 rounded-full bg-gray-500 animate-pulse'></div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='h-4 w-2/5 rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-3/4 rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-3/4 rounded-full bg-gray-500 animate-pulse'></div>
          <div className='h-4 w-2/4 rounded-full bg-gray-500 animate-pulse'></div>
        </div>
      </section>
    </Container>
  );
}
