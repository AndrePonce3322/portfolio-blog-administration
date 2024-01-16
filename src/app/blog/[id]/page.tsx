'use client';
import Container from '@/components/container';
import BlogPageSkeleton from '@/components/skeletons/blog';
import { MyBlogContext } from '@/context/blog-context';
import { Blog } from '@/firebase/client';
import MDEditor from '@uiw/react-md-editor';
import { useContext, useEffect, useState } from 'react';
import BlogHeader from '../header';

type BlogWithoutId = Omit<Blog, 'id'>;

export default function BlogPage({ params }: { params: { id: string } }) {
  const { getBlogById } = useContext(MyBlogContext);
  const [blog, setBlog] = useState<BlogWithoutId>({
    title: '',
    description: '',
    content: '',
    tags: [],
    timestamp: 0,
  });

  useEffect(() => {
    const res = getBlogById(params.id) as unknown as Promise<Blog>;
    res.then((res) => setBlog(res));
  }, [params.id]);

  if (!blog.title) return <BlogPageSkeleton />;

  return (
    <Container>
      <section className='w-[90%] md:w-[70%] flex flex-col gap-6 text-white min-h-[80vh] pb-10 relative'>
        <BlogHeader
          tags={blog.tags}
          timestamp={blog.timestamp}
          title={blog.title}
        />

        <hr />

        <MDEditor.Markdown
          source={blog.content}
          style={{
            backgroundColor: 'transparent !important',
            background: 'transparent !important',
          }}
        />
      </section>
    </Container>
  );
}
