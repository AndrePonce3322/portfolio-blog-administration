'use client';
import {
  Blog,
  addNewBlog,
  deleteBlog,
  getBlog,
  getBlogs,
} from '@/firebase/client';
import { createContext, useEffect, useState } from 'react';

// Creación del contexto con sus tipos incluidos
export const MyBlogContext = createContext({
  blogs: [] as Blog[],
  create: (blog: Omit<Blog, 'id' | 'timestamp'>) => {},
  getBlogById: (id: string) => {},
  deleteBlogById: (id: string) => {},
});

export default function MyBlogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [blogs, setBlogs] = useState([] as Blog[]);

  useEffect(() => {
    const callBlogs = async () => {
      // LLamar a los blogs en primer instancia
      const data = await getBlogs();
      setBlogs(data);
    };
    callBlogs();
  }, []);

  // create Blog
  async function create({
    title,
    description,
    content,
    tags,
  }: Omit<Blog, 'id' | 'timestamp'>) {
    const newBlog = {
      title,
      description,
      content,
      tags,
      timestamp: Date.now(),
    };

    const res = await addNewBlog({ content, description, tags, title });
    const body = {
      ...newBlog,
      id: res.id,
    };

    return setBlogs([body, ...blogs]); // Actualizamos el estado
  }

  // Get Blog
  async function getBlogById(id: string) {
    if (blogs.length === 0) return await getBlog(id); // Sino hay blogs en el estado, llamamos a la función getBlog

    const blog = blogs.find((blog) => blog.id === id);
    return Promise.resolve(blog);
  }

  // Delete
  async function deleteBlogById(id: string) {
    await deleteBlog(id)
      .then(() => {
        // Cuando elimine el blog, actualizamos el estado
        const blog = blogs.filter((blog) => blog.id !== id);
        setBlogs(blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <MyBlogContext.Provider
      value={{
        blogs,
        create,
        getBlogById,
        deleteBlogById,
      }}
    >
      {children}
    </MyBlogContext.Provider>
  );
}
