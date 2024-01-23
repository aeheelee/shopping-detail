import { useMemo } from 'react';
import SearchFilter from './SearchFilter';
import type { CategoryType } from '../../types/CommonTypes';
import styled from 'styled-components';

interface IProps {
  data: CategoryType;
  onFilterCloseClick: () => void;
}

const SearchFilterList = ({ data, onFilterCloseClick }: IProps) => {
  const newArray = useMemo(() => {
    const {
      product,
      searchFilter: { price, discount },
    } = data;

    const priceData = price.map((item) => ({
      ...item,
      title: `₩${item.min.toLocaleString()} ~ ₩${item.max.toLocaleString()}`,
    }));
    const discountData = discount.map((item) => ({ ...item, title: `${item.min}% ~ ${item.max}%` }));

    return [
      { type: 'product', title: '상품별', data: [{ id: 0, title: '전체' }, ...product] },
      { type: 'price', title: '가격별', data: [{ id: 0, title: '전체' }, ...priceData] },
      { type: 'discount', title: '할인별', data: [{ id: 0, title: '전체' }, ...discountData] },
    ];
  }, [data]);

  return (
    <StyledFilterListWrap>
      {newArray.map((item, index) => (
        <SearchFilter filter={item} key={index} />
      ))}
      <StyledFilterCloseButton onClick={onFilterCloseClick}>X</StyledFilterCloseButton>
    </StyledFilterListWrap>
  );
};

const StyledFilterListWrap = styled.div`
  position: relative;
  padding-bottom: 20px;

  @media only screen and (max-width: 900px) {
    padding-top: 50px;
  }
`;

const StyledFilterCloseButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  border: 1px solid black;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

export default SearchFilterList;
