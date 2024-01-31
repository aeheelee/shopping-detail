import { useSearchParams } from 'react-router-dom';
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';

export const useFilter = () => {
  // NOTE http://localhost:3000/search?query='검색어'
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query') || window.encodeURIComponent(' ');

  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: withDefault(StringParam, window.encodeURIComponent(' ')),
    category: NumberParam,
    minDiscount: NumberParam,
    maxDiscount: NumberParam,
    minPrice: NumberParam,
    maxPrice: NumberParam,
  });

  const resetQuery = () => {
    setQuery(
      {
        page: 1,
        query: keyword,
      },
      'replace',
    );
  };

  return { query, setQuery, keyword, resetQuery };
};
