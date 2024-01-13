// import { useMemo } from 'react';
import styled, { css } from 'styled-components';

interface IPaginationProps {
  maxPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ maxPage, currentPage = 1, onPageChange }: IPaginationProps) => {
  const pages = Array.from({ length: maxPage }, (_, index) => index + 1);

  const handleClickPage = (page: number) => () => onPageChange(page);

  return (
    <StyledPagination>
      {pages.map((index, _idx) => (
        <StyledPaginationButton
          key={`page_${index}_${_idx}`}
          disabled={currentPage === index}
          onClick={handleClickPage(index)}
        >
          {index}
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
