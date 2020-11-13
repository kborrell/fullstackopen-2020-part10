import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

const useRepository = (variables) => {
  const [user, setUser] = useState(undefined);
  const { data, error, loading, ...result } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  useEffect(() => {
    if (!error && data && data.authorizedUser) {
      setUser(data.authorizedUser);
    }
  }, [data]);

  return { user, loading, ...result };
};

export default useRepository;