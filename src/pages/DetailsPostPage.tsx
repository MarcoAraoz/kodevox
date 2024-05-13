import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MediaCard from '../components/cards/MediaCard';

const DetailsPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data));
  }, [id]);

  return post ? <MediaCard post={post} /> : null;
};

export default DetailsPostPage;