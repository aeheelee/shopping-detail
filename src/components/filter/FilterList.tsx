import React from 'react';
import FilterItem from './FilterItem';
import type { CategoryType } from '../../types/CommonTypes';
import styled from 'styled-components';

interface IProps {
  data: CategoryType;
}

const FilterList = ({ data }: IProps) => {
  const { product, searchFilter } = data;
  const modifiedData = { product, searchFilter };

  return (
    <StyledFilterListWrap>
      <FilterItem data={modifiedData} />;
    </StyledFilterListWrap>
  );
};

const StyledFilterListWrap = styled.div`
  padding-bottom: 20px;
`;

export default FilterList;
