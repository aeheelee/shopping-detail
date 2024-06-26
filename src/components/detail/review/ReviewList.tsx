import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import StarRate from './ReviewStarRate';
import Pagination from '../../common/Pagination';
import useReview from '../../../hooks/api/useReview';
import { useFilter } from '../../../hooks/useFilter';

const ReviewList = () => {
  const { productId } = useParams();
  const { query } = useFilter();
  const { data: reviewData } = useReview(query.page, Number(productId));

  if (!reviewData?.items.length) return null;

  return (
    <StyledWrap>
      <StyledText>{reviewData.totalItems}개 후기</StyledText>
      <ul>
        {reviewData.items.map((item, index) => {
          const { productId, rating, writer, content } = item;
          return (
            <StyledItems key={`review${productId}_${index}`}>
              <ReviewItem writer={writer} content={content} />
              <StarRate rating={rating} />
            </StyledItems>
          );
        })}
      </ul>
      <Pagination maxPage={reviewData.maxPage} currentPage={query.page} />
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-top: 100px;
`;

const StyledItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const StyledText = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
  color: blueviolet;
`;

export default ReviewList;
