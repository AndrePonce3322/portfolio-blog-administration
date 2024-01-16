'use client';

import { MyBlogContext } from '@/context/blog-context';
import { useContext, useEffect } from 'react';

export default function useBlogs() {
  const { blogs } = useContext(MyBlogContext);

  if (!blogs) throw new Error('No blogs found');
  return blogs;
}
