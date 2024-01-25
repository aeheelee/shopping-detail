import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../../constants/constants';
import { ProductType } from '../../types/CommonTypes';
import { fetchApi } from '../api';

/**
 *
 * @param categoryId Id값을 가져옵니다.
 * @returns response data를 리턴합니다.
 */
const useProducts = (page: number, categoryId: number) => {
  const url = API_BASE_URL + `/products?page=${page}&limit=12&category=${categoryId}`;
  console.log(url);
  const fetchProducts = (): Promise<ProductType> => fetchApi(url);

  return useQuery({ queryKey: ['products', page, categoryId], queryFn: () => fetchProducts });
};

export default useProducts;
