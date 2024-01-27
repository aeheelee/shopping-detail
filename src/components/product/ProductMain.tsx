import styled from 'styled-components';
import { NumberParam, useQueryParams, withDefault } from 'use-query-params';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import Pagination from '../Pagination';
import LoadingIndicator from '../LoadingIndicator';
import useProducts from '../../hooks/api/useProducts';

const ProductSearch = () => {
  const { category } = useParams();
  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
  });

  console.log('category, ' + category);

  const { data: products, isLoading: isLoadingProducts = true } = useProducts(query.page, Number(category));

  console.log('products, ' + products);

  if (!products) return null;

  const handleChangePage = (page: number) => {
    setQuery({ page });
    window.scrollTo(0, 0);
  };

  return (
    <StyledContent>
      {isLoadingProducts ? <LoadingIndicator /> : <ProductList data={products.items} />}
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

export default ProductSearch;
