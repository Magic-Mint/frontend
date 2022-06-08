import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient, mutate as mutateGlobal } from 'react-query';
import { Auth } from '../api';

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(
    () => {
      return Auth.logout();
    },
    {
      onSuccess: async () => {
        await queryClient.cancelQueries('getMe');
        queryClient.setQueryData('getMe', () => null);
        navigate('/');
      },
      onSettled: () => {
        queryClient.invalidateQueries('getMe');
      },
    }
  );

  return {
    logout: mutate,
    loading: isLoading,
  };
};

export default useLogout;
