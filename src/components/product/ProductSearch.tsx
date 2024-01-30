import styled from 'styled-components';
import ProductList from './ProductList';
import Pagination from '../Pagination';
import useSearch from '../../hooks/api/useSearch';
import { useFilter } from '../../hooks/useFilter';

const ProductSearch = () => {
  const { query, setQuery, keyword } = useFilter();
  setQuery({ query: keyword });

  const { data: products } = useSearch({ ...query });

  if (!products) return null;

  return (
    <StyledContent>
      <StyledText>
        <strong>{products.totalItems}</strong>개 결과
      </StyledText>
      {products.items.length === 0 ? <div>찾으시는 상품이 없어요.</div> : <ProductList data={products.items} />}
      <Pagination maxPage={products.maxPage} currentPage={products.currentPage} />
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
