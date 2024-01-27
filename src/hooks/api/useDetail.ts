import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '.';
import { API_BASE_URL } from '../../constants/constants';
import { ProductDetailType } from '../../types/CommonTypes';

const useDetail = (id: number) => {
  const url = API_BASE_URL + `/detail/${id}`;
  const fetchDetail = (): Promise<ProductDetailType> => fetchApi(url);

  return useQuery({ queryKey: ['detail', id], queryFn: () => fetchDetail(), staleTime: 0 });
};

export default useDetail;
