import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../../constants/constants';
import { ProductType } from '../../types/CommonTypes';
import { generateUrl, fetchApi } from '../api';
import { QueryStringParams } from '../../constants/constants';

/**
 * 카테고리 정보를 가지고 옵니다.
 *
 * @returns
 */
// const fetchSearch = async (): Promise<ProductType> => {
//   try {
//     const url = API_BASE_URL + '/search?query=%20&limit=10';
//     const response = await axios.get<ProductType>(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response ? error.response.data : 'Network error');
//   }
// };

/**
 * 카테고리 정보를 관리 합니다.
 *
 * @returns
 */
// export const useSearch = () => {
//   return useQuery<ProductType>({ queryKey: ['search', params], queryFn: fetchSearch });
// };

const useSearch = (params: QueryStringParams = {}) => {
  // 리뷰: api/index.ts 쪽 리뷰 내용을 보시면 여기서 역시 queries를 만들어주는 부분이 필요 없을 것 같습니다.
  const queries = Object.entries(params).reduce((acc, cur) => {
    const [k, v] = cur;
    if (!v) return acc;
    acc[k] = v;
    return acc;
  }, {} as QueryStringParams);

  const url = generateUrl(`${API_BASE_URL}/search`, {
    limit: 12,
    ...queries,
  });
  const fetchSearch = (): Promise<ProductType> => fetchApi(url);

  return useQuery({
    queryKey: ['search', params],
    queryFn: () => fetchSearch(),
  });
};

export default useSearch;
