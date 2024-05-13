import { Card, CardContent, Typography } from '@mui/material';
import { Post } from '../../types';

type MediaCardProps = {
  post: Post;
};

const MediaCard: React.FC<MediaCardProps> = ({ post }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        {post.title}
      </Typography>
      <Typography variant="body2">
        {post.body}
      </Typography>
    </CardContent>
  </Card>
);

export default MediaCard;