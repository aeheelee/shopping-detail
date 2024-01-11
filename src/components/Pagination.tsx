import styled, { css } from 'styled-components';

const Pagination = () => {
  return (
    <StyledPagination>
      <StyledPaginationButton disabled={true}>1</StyledPaginationButton>
      <StyledPaginationButton disabled={false}>2</StyledPaginationButton>
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
