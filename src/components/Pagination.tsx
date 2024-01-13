import { useMemo } from 'react';
import styled, { css } from 'styled-components';

interface IPaginationProps {
  maxPage: number;
  currentLimit: number;
  // paginationSize?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ maxPage, currentLimit, currentPage = 1, onPageChange }: IPaginationProps) => {
  // const totalPages = maxPage;

  const startPage = 1;
  const endPage = maxPage / currentLimit;

  const pages = useMemo(
    () => Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage),
    [endPage, startPage],
  );

  console.log(pages);

  const handleClickPage = (page: number) => () => onPageChange(page);

  return (
    <StyledPagination>
      {pages.map((i, idx) => (
        <StyledPaginationButton key={`page_${i}_${idx}`} disabled={currentPage === i} onClick={handleClickPage(i)}>
          {i}
        </StyledPaginationButton>
      ))}
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  margin: 20px 0;
`;

const StyledPaginationButton = styled.button<{ disabled: boolean }>`
  flex: 0 0 auto;
  padding: 2px 10px;
  font-size: 18px;
  line-height: 27px;

  ${({ disabled }) => css`
    font-weight: ${disabled ? '700' : '400'};
    color: ${disabled ? 'black' : '#b2b2b2'};
  `}
`;

export default Pagination;
