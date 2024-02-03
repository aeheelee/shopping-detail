import { useSuspenseQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../../constants/constants';
import { ReviesType } from '../../types/CommonTypes';
import { fetchApi } from '../api';

/**
 *
 * @param page current page를 가져옵니다.
 * @param productId 상품 id 값을 가지고 옵니다.
 * @returns response data를 리턴합니다.
 */
const useReview = (page: number, productId: number) => {
  const url = API_BASE_URL + `/purchase/review/${productId}?page=${page}&limit=10`;

  const fetchReview = (): Promise<ReviesType> => fetchApi(url);

  return useSuspenseQuery({ queryKey: ['review', page, productId], queryFn: fetchReview });
};

export default useReview;
