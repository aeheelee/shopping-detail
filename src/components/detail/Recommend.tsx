import styled from 'styled-components';
import ProductSlide from '../product/ProductSlide';
import useRecommend from '../../hooks/api/useRecommend';
import { useParams } from 'react-router-dom';

const Recommend = () => {
  const { productId } = useParams();
  const { data: products } = useRecommend(Number(productId));

  if (!products) return null;

  return (
    <StyledWrap>
      <StyledTitle>상품추천</StyledTitle>
      <StyledContent>
        <ProductSlide data={products.items} swiperName={'recommSlide'} />
      </StyledContent>
    </StyledWrap>
  );
};
export default Recommend;

const StyledWrap = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-top: 100px;
`;

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
