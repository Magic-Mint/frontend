import { createContext, useContext } from 'react';
import { useQuery } from 'react-query';
import { User } from '../../api';

const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const { data: user, isLoading: isUserLoading } = useQuery(
    'getMe',
    async () => {
      const res = await User.getUser();
      if (!res.data) return null;

      return res.data;
    },
    {
      enabled: true,
    }
  );

  return (
    <UserContext.Provider
      value={{
        user,
        isUserLoading,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
