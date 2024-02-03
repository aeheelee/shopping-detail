import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import Pagination from '../common/Pagination';
import useProducts from '../../hooks/api/useProducts';
import { useFilter } from '../../hooks/useFilter';

const ProductSearch = () => {
  const { category } = useParams();
  const { query } = useFilter();
  const { data: products } = useProducts(query.page, Number(category));

  if (!products) return null;

  return (
    <StyledContent>
      <ProductList data={products.items} />
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

export default ProductSearch;
