import { Post } from '../types';

const SERVER_URL = 'https://dummyjson.com';

export async function getPostById(id: number): Promise<Post | null> {
  const data = await fetch(`${SERVER_URL}/posts/${id}`);
  if (data.ok) {
    console.log('fetching post by id...');
    const res = await data.json();
    return res;
  }
  return null;
}
