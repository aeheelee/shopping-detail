import styled from 'styled-components';
import ReviewList from '../components/detail/review/ReviewList';
import ProductDetail from '../components/detail/ProductDetail';
import Recommend from '../components/detail/Recommend';

const ProductDetailPage = () => {
  return (
    <StyledWrap>
      <ProductDetail />
      <ReviewList />
      <Recommend />
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  min-width: 900px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 50px;
`;

export default ProductDetailPage;
