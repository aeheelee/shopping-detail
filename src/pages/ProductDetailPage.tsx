import styled from 'styled-components';
import ReviewList from '../components/detail/review/ReviewList';

const ProductDetailPage = () => {
  return (
    <StyledWrap>
      <ReviewList />
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  min-width: 900px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 50px 0;
`;

export default ProductDetailPage;
