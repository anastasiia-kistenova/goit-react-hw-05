import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are trying to access does not exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;