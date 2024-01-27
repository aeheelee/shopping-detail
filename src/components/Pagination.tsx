import styled, { css } from 'styled-components';
import { NumberParam, useQueryParams, withDefault } from 'use-query-params';

interface IPaginationProps {
  maxPage: number;
  currentPage?: number;
}

const Pagination = ({ maxPage, currentPage = 1 }: IPaginationProps) => {
  const [, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
  });

  const pages = Array.from({ length: maxPage }, (_, index) => index + 1);

  const handleChangePage = (page: number) => {
    setQuery({ page });
  };

  return (
    <StyledPagination>
      {pages.map((index, _idx) => (
        <StyledPaginationButton
          key={`page_${index}_${_idx}`}
          disabled={currentPage === index}
          onClick={() => handleChangePage(index)}
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
  margin: 60px 0 30px;
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
