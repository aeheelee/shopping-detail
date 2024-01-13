import { useMemo } from 'react';
import FilterItem from './FilterItem';
import type { CategoryType } from '../../types/CommonTypes';
import styled from 'styled-components';

interface IProps {
  data: CategoryType;
}

const FilterList = ({ data }: IProps) => {
  const newArray = useMemo(() => {
    const {
      product,
      searchFilter: { price, discount },
    } = data;

    const productData = product.map(({ id, title }) => ({ id, title }));
    const priceData = price.map((item) => ({ ...item, title: `${item.min} ~ ${item.max}` }));
    const discountData = discount.map((item) => ({ ...item, title: `${item.min} ~ ${item.max}` }));

    const productDataArray = [{ type: 'product', title: '상품별', data: productData }];
    const priceDataArray = [{ type: 'product', title: '가격별', data: priceData }];
    const discountDataArray = [{ type: 'product', title: '할인별', data: discountData }];

    return [productDataArray, priceDataArray, discountDataArray];
  }, [data]);

  console.log(newArray);

  return (
    <StyledFilterListWrap>
      {newArray.map((item, index) => {
        <FilterItem data={item} key={index} />;
      })}
    </StyledFilterListWrap>
  );
};

const StyledFilterListWrap = styled.div`
  padding-bottom: 20px;
`;

export default FilterList;
