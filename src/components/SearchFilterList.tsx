import React from 'react';
import SearchFilter from './SearchFilter';
import styled from 'styled-components';

const SearchFilterList = () => {
  return (
    <StyledFilterListWrap>
      <SearchFilter />
    </StyledFilterListWrap>
  );
};

const StyledFilterListWrap = styled.div`
  padding-bottom: 20px;
`;

export default SearchFilterList;
