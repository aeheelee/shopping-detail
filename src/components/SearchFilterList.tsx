import React from 'react';
import SearchFilter from './SearchFilter';
import Button from './Button';
import styled from 'styled-components';

const SearchFilterList = () => {
  return (
    <StyldFilterListWrap>
      <SearchFilter />
      <Button />
    </StyldFilterListWrap>
  );
};

const StyldFilterListWrap = styled.div`
  padding-bottom: 20px;
`;

export default SearchFilterList;
