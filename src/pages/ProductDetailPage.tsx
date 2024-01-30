import styled from 'styled-components';
import { Suspense } from 'react';
import ReviewList from '../components/detail/review/ReviewList';
import ProductDetail from '../components/detail/productInfo/ProductDetail';
import Recommend from '../components/detail/Recommend';
import LoadingIndicator from '../components/LoadingIndicator';
import Dimmed from '../components/Dimmed';
import { useAtomValue } from 'jotai';
import { imageLayerAtom } from '../store/atoms/imageLayerAtom';

const ProductDetailPage = () => {
  const isOpenLayer = useAtomValue(imageLayerAtom);

  // const onLayer = (isOpen: boolean) => {
  //   setIsOpenLayer(isOpen);
  // };

  return (
    <StyledWrap>
      <ProductDetail />
      <Suspense fallback={<LoadingIndicator />}>
        <ReviewList />
      </Suspense>
      <Recommend />
      {isOpenLayer && <Dimmed />}
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 50px 80px;

  @media only screen and (max-width: 900px) {
    padding: 20px 0;
  }
`;

export default ProductDetailPage;
