import styled from 'styled-components';
import ProductSlide from '../product/ProductSlide';
import useRecommend from '../../hooks/api/useRecommend';
import LoadingIndicator from '../LoadingIndicator';
import { useParams } from 'react-router-dom';

const Recommend = () => {
  const { productId } = useParams();
  const { data: products, isLoading: isLoadingProducts = true } = useRecommend(Number(productId));

  if (!products) return null;

  return (
    <StyledWrap>
      <StyledTitle>상품추천</StyledTitle>
      <StyledContent>
        {isLoadingProducts ? <LoadingIndicator /> : <ProductSlide data={products.items} swiperName={'recommSlide'} />}
      </StyledContent>
    </StyledWrap>
  );
};
export default Recommend;

const StyledWrap = styled.section``;

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const StyledContent = styled.div`
  margin-top: 20px;

  .recommSlide {
    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after,
    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
      color: #fff;
    }
  }
`;