import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../../constants/constants';
import { RecommedType } from '../../types/CommonTypes';
import { fetchApi } from '.';

const useRecommend = (id: number) => {
  const url = API_BASE_URL + `/recommendation/${id}`;
  const fetchRecommend = (): Promise<RecommedType> => fetchApi(url);

  return useQuery({ queryKey: ['recommend', id], queryFn: fetchRecommend });
};

export default useRecommend;
