import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Dashboard from '../pages/Dasboard';
import PostsPage from '../pages/PostPage';
import DetailsPostPage from '../pages/DetailsPostPage';

const Routes = () => (
  <Router>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/posts" exact component={PostsPage} />
      <Route path="/posts/posts-details/:id" component={DetailsPostPage} />
  </Router>
);

export default Routes;