import styled from 'styled-components';
import { Suspense, useState } from 'react';
import ReviewList from '../components/detail/review/ReviewList';
import ProductDetail from '../components/detail/productInfo/ProductDetail';
import Recommend from '../components/detail/Recommend';
import LoadingIndicator from '../components/LoadingIndicator';
import Dimmed from '../components/Dimmed';

const ProductDetailPage = () => {
  const [isOpenLayer, setIsOpenLayer] = useState(false);

  const onLayer = (isOpen: boolean) => {
    setIsOpenLayer(isOpen);
  };

  return (
    <StyledWrap>
      <ProductDetail onLayer={onLayer} />
      <Suspense fallback={<LoadingIndicator />}>
        <ReviewList />
      </Suspense>
      <Recommend />
      {isOpenLayer && <Dimmed onDimmed={onLayer} />}
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  min-width: 900px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 50px 80px;
`;

export default ProductDetailPage;
