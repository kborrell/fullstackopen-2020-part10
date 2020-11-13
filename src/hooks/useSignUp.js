import { SIGN_UP } from '../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';

const useSignUp = () => {
  const [ mutate, result ] = useMutation(SIGN_UP);

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({ variables: { user: { username, password } } });
    return { data };
  };

  return [ signUp, result ];
};

export default useSignUp;