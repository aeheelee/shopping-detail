import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { NumberParam, useQueryParams, withDefault } from 'use-query-params';
import ReviewItem from './ReviewItem';
import StarRate from './ReviewStarRate';
import Pagination from '../../Pagination';
import useReview from '../../../hooks/api/useReview';

const ReviewList = () => {
  const { productId } = useParams();
  const [query] = useQueryParams({
    page: withDefault(NumberParam, 1),
  });
  const { data: reviewData } = useReview(query.page, Number(productId));

  if (!reviewData?.items.length) return null;

  return (
    <section>
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
    </section>
  );
};

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
  color: #375fff;
`;

export default ReviewList;
