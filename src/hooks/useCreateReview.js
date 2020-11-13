import { CREATE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';

const useCreateReview = () => {
  const [ mutate, result ] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const { data } = await mutate({ variables: { review: { repositoryName, ownerName, rating, text } } });
    return { data };
  };

  return [ createReview, result ];
};

export default useCreateReview;