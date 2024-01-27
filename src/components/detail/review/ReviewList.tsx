import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { NumberParam, useQueryParams, withDefault } from 'use-query-params';
import ReviewItem from './ReviewItem';
import StarRate from './ReviewStarRate';
import Pagination from '../../Pagination';
import useReview from '../../../hooks/api/useReview';

const ReviewList = () => {
  const { productId } = useParams();
  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
  });
  const { data: reviewData } = useReview(query.page, Number(productId));

  if (!reviewData) return null;

  const handleChangePage = (page: number) => {
    setQuery({ page });
    window.scrollTo(0, 0);
  };

  return (
    <StyledWrap>
      <StyledText>90개 후기</StyledText>
      <StyledList>
        {reviewData.items.map((item, index) => {
          const { rating, writer, content } = item;

          return (
            <StyledItems key={`review_${index}`}>
              <ReviewItem writer={writer} content={content} />
              <StarRate rating={rating} />
            </StyledItems>
          );
        })}
      </StyledList>
      <Pagination maxPage={reviewData.maxPage} currentPage={query.page} onPageChange={handleChangePage} />
    </StyledWrap>
  );
};

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
