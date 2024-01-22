import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '../../constants/constants';
import { ProductType } from '../../types/CommonTypes';
import { generateUrl, fetchApi } from '../api';
import { QueryStringParams } from '../../constants/constants';

/**
 *
 * @param params 쿼리스트링을 인자로 받아옵니다.
 * @returns response dat와 쿼리스트링을 리턴합니다.
 */
const useSearch = (params: QueryStringParams = {}) => {
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
