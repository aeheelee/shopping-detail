import { useMemo } from 'react';
import SearchFilter from './SearchFilter';
import type { CategoryType } from '../../types/CommonTypes';
import styled from 'styled-components';

interface IProps {
  data: CategoryType;
}

const SearchFilterList = ({ data }: IProps) => {
  const newArray = useMemo(() => {
    // 리뷰: 마이너한 내용이지만, newArray보다는 가공된 데이터의 의미를 담는 변수명이 더 좋을 것 같습니다.
    const {
      product,
      searchFilter: { price, discount },
    } = data;

    const priceData = price.map((item) => ({
      ...item,
      title: `₩${item.min.toLocaleString()} ~ ₩${item.max.toLocaleString()}`,
    }));
    const discountData = discount.map((item) => ({ ...item, title: `${item.min}% ~ ${item.max}%` }));

    // 리뷰
    // 아래처럼 상수를 정의하고 사용하는 것도 코드를 관리하기에 좋은 방법이어 공유드려봅니다.
    // const PRODUCT = 'product';
    // const PRICE = 'price';
    // const DISCOUNT = 'discount';

    // enum 정의
    // enum FilterType {
    //   Product = 'product',
    //   Price = 'price',
    //   Discount = 'discount',
    // }

    // 코드에서 활용하기
    // return [
    //   { type: PRODUCT, title: '상품별', data: [{ id: 0, title: '전체' }, ...product] },
    //   { type: PRICE, title: '가격별', data: [{ id: 0, title: '전체' }, ...priceData] },
    //   { type: DISCOUNT, title: '할인별', data: [{ id: 0, title: '전체' }, ...discountData] },
    // ];

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
