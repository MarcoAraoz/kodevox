
import  { useEffect, useState } from 'react';
import axios from 'axios';
import TablePosts from '../components/table/TablePosts';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data));
  }, []);

  return <TablePosts posts={posts} />;
};

export default PostsPage;