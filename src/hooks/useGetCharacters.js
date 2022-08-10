import axios from 'axios';
import {useQuery} from 'react-query';

export const getCharacters = async () => {
  const {data} = await axios.get('/character_bug');
  return data;
};

export const useGetCharacters = () => {
  return useQuery(['characters'], {
    queryFn: getCharacters,
  });
};
