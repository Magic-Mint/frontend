import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/User';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  return user ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
