import styled from 'styled-components';
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import ProductList from './ProductList';
import Pagination from '../Pagination';
import LoadingIndicator from '../LoadingIndicator';
import useSearch from '../../hooks/api/useSearch';

interface IContentsProps {
  keyword: string;
}

const ProductSearch = ({ keyword }: IContentsProps) => {
  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: withDefault(StringParam, keyword),
  });

  const { data: products, isLoading: isLoadingCategories = true } = useSearch({ ...query });

  if (!products) return null;

  const handleChangePage = (page: number) => {
    setQuery({ page });
    window.scrollTo(0, 0);
  };

  return (
    <StyledContent>
      <StyledText>
        <strong>{products.totalItems}</strong>개 결과
      </StyledText>
      {isLoadingCategories ? (
        <LoadingIndicator />
      ) : (
        <>{products.items.length === 0 ? <div>찾으시는 상품이 없어요.</div> : <ProductList data={products.items} />}</>
      )}
      <Pagination maxPage={products.maxPage} currentPage={products.currentPage} onPageChange={handleChangePage} />
    </StyledContent>
  );
};

const StyledContent = styled.section`
  flex: 1;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const StyledText = styled.p`
  padding: 12px 0;
  font-size: 14px;
`;

export default ProductSearch;
