import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClaimNftsPage from './components/ClaimNftsPage';
import Layout from './components/Layout';
import WelcomePage from './components/WelcomePage';
import ProfilePage from './components/ProfilePage';
import useSetWeb3 from './hooks/useSetWeb3';

const App = () => {
  useSetWeb3();
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            path="/"
            element={<WelcomePage />}
          />
          <Route
            path="/claimNfts"
            element={<ClaimNftsPage />}
          />
        </Route>
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default App;
