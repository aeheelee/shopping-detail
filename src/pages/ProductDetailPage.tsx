import styled from 'styled-components';
import { Suspense } from 'react';
import ReviewList from '../components/detail/review/ReviewList';
import ProductDetail from '../components/detail/productInfo/ProductDetail';
import Recommend from '../components/detail/Recommend';
import LoadingIndicator from '../components/LoadingIndicator';

const ProductDetailPage = () => {
  return (
    <StyledWrap>
      <ProductDetail />
      <Suspense fallback={<LoadingIndicator />}>
        <ReviewList />
      </Suspense>
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
