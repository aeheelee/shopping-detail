import { useMemo } from 'react';
import SearchFilter from './SearchFilter';
import type { CategoryType } from '../../types/CommonTypes';
import styled from 'styled-components';

interface IProps {
  data: CategoryType;
}

const SearchFilterList = ({ data }: IProps) => {
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
    </StyledFilterListWrap>
  );
};

const StyledFilterListWrap = styled.div`
  padding-bottom: 20px;
`;

export default SearchFilterList;
