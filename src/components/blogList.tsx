'use client';
import useBlogs from '@/hooks/useBlogs';
import Card from './card/card';
import BlogListSkeleton from './skeletons/SkeletonBlogList';

export default function SkeletonBlogList() {
  const blogs = useBlogs();

  if (blogs.length === 0) {
    // Muestra el esqueleto mientras los documentos se cargan
    return <BlogListSkeleton />;
  }

  return blogs.map((blog) => (
    <Card
      key={blog.id}
      id={blog.id}
      tags={blog.tags}
      title={blog.title}
      description={blog.description}
      timestamp={blog.timestamp}
    />
  ));
}
