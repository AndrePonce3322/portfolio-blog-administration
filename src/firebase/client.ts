import { initializeApp } from 'firebase/app';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYdD7-fdN-EInsJzW7WcwjHrIUPHVslmo',
  authDomain: 'administracion-de-blog.firebaseapp.com',
  projectId: 'administracion-de-blog',
  storageBucket: 'administracion-de-blog.appspot.com',
  messagingSenderId: '448717013068',
  appId: '1:448717013068:web:c7679233216e507b15b4e9',
  measurementId: 'G-862R8EVPWS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Database name
const dbName = 'blog-documents';

// Create collection
const blogCollection = collection(db, dbName);

// Functions
async function addNewBlog({
  title,
  description,
  tags,
  content,
}: {
  title: string;
  description: string;
  content: string;
  tags: Array<string>;
}) {
  try {
    return await addDoc(blogCollection, {
      title,
      description,
      content,
      tags,
      timestamp: Date.now(),
    }).then((docRef) => {
      return { id: docRef.id };
    });
  } catch (error) {
    throw new Error('Error adding blog document');
  }
}

async function deleteBlog(id: string) {
  try {
    const document = doc(db, dbName, id);
    return await deleteDoc(document);
  } catch (error) {
    throw new Error('Error deleting blogs document');
  }
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  content: string;
  timestamp: number;
}

async function getBlogs() {
  console.log('USO GetBlogs');

  const querySnapshot = await getDocs(blogCollection);
  const docs: Array<any> = [];

  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });

  const newDocs = docs.sort((a, b) => b.timestamp - a.timestamp);
  return newDocs as Array<Blog>;
}

async function updateBlog(id: string, data: Partial<Blog>) {
  try {
    const document = doc(db, dbName, id);
    return await updateDoc(document, data);
  } catch (error) {
    throw new Error('Error updating blog document');
  }
}

async function getBlog(id: string) {
  console.log('USO GetBlog UNICO CON ID');

  const document = doc(db, dbName, id);
  const docSnap = await getDoc(document);

  if (docSnap.exists()) {
    return docSnap.data() as Blog;
  }
  console.log('No such document!');
  return null;
}

export { addNewBlog, deleteBlog, getBlog, getBlogs, updateBlog };
