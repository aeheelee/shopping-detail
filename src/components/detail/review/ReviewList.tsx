import styled from 'styled-components';
import ReviewItem from './ReviewItem';
import StarRate from './ReviewStarRate';
// import Pagination from '../../Pagination';

const ReviewList = () => (
  <StyledWrap>
    <StyledText>90개 후기</StyledText>
    <StyledList>
      {/* 여기서 map */}
      <StyledItems>
        <ReviewItem />
        <StarRate />
      </StyledItems>
    </StyledList>
    {/* <Pagination maxPage={products.maxPage} currentPage={products.currentPage} onPageChange={handleChangePage} /> */}
  </StyledWrap>
);

const StyledWrap = styled.section``;
const StyledList = styled.ul``;
const StyledItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledText = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #375fff;
`;

export default ReviewList;
