import BlogList from '@/components/blogList';
import Container from '@/components/container';
import Form from '@/components/form/form';
import Header from '@/components/header';

export default function Home() {
  return (
    <Container>
      <section className='w-[90%] md:w-[70%] flex flex-col gap-6 text-[#f5f5f5]'>
        <Header />
        <Form />

        <div className='grid-cols-1 grid md:grid-cols-2 gap-4'>
          <BlogList />
        </div>
      </section>
    </Container>
  );
}
