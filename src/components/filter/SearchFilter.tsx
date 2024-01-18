import { useState } from 'react';
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import styled from 'styled-components';

interface IData {
  id: number;
  title: string;
  category?: string;
  imageUrl?: string;
  min?: number;
  max?: number;
}
interface IProps {
  filter: {
    type: string;
    title: string;
    data: IData[];
  };
}

const SearchFilter = ({ filter }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: withDefault(StringParam, window.encodeURIComponent(' ')),
    category: NumberParam,
    minDiscount: NumberParam,
    maxDiscount: NumberParam,
    minPrice: NumberParam,
    maxPrice: NumberParam,
  });

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (item: IData) => {
    const setQueryParam = (param: string, value: number | undefined) => {
      setQuery({ [param]: item.title === '전체' ? undefined : value }, 'replaceIn');
    };

    //각 카테고리 parameter set
    switch (filter.type) {
      case 'product':
        setQueryParam('category', item.id);
        break;
      case 'discount':
        setQueryParam('minDiscount', item.min);
        setQueryParam('maxDiscount', item.max);
        break;
      case 'price':
        setQueryParam('minPrice', item.min);
        setQueryParam('maxPrice', item.max);
        break;
      default:
        console.log('선택한 값이 없어요');
    }
  };

  return (
    <>
      <StyledFilterItem.Wrap>
        <StyledFilterItem.ButtonTitle type="button" onClick={handleClick}>
          {filter.title}
          <StyledFilterItem.ButtonIcon $isOpen={isOpen}>
            {isOpen ? '필터 선택 리스트 열림' : '필터 선택 리스트 닫힘'}
          </StyledFilterItem.ButtonIcon>
        </StyledFilterItem.ButtonTitle>
        <StyledFilterItem.DetailList $isOpen={isOpen}>
          {filter.data.map((item, index) => {
            const isChecked = ((): boolean => {
              switch (filter.type) {
                case 'product':
                  if (query.category === undefined && item.id === 0) return true;
                  return item.id === query.category;
                case 'price':
                case 'discount':
                  const key = filter.type === 'price' ? 'minPrice' : 'minDiscount';
                  if (query[key] === undefined && item.id === 0) return true;
                  return 'min' in item && item.min === query[key];
                default:
                  return false;
              }
            })();

            return (
              <StyledFilterItem.DetailListItem key={index}>
                <input
                  type="radio"
                  id={`${filter.type}_${item.id}`}
                  name={filter.type}
                  checked={isChecked}
                  onChange={() => {
                    handleChange(item);
                  }}
                />
                <StyledFilterItem.Label htmlFor={`${filter.type}_${item.id}`}>{item.title}</StyledFilterItem.Label>
              </StyledFilterItem.DetailListItem>
            );
          })}
        </StyledFilterItem.DetailList>
      </StyledFilterItem.Wrap>
    </>
  );
};

const StyledFilterItem = {
  Wrap: styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid #d1d1d1;
  `,
  ButtonTitle: styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: purple;
  `,
  ButtonIcon: styled.i<{ $isOpen: boolean }>`
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    font-size: 0;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      -webkit-transform: translate(-50%, -50%) rotate(45deg);
      transform: ${({ $isOpen }) =>
        $isOpen ? 'translate(-50%, -50%) rotate(-135deg)' : 'translate(-50%, -50%) rotate(45deg)'};
      margin-top: 2px;
      border-top: 1px solid #333;
      border-left: 1px solid #333;
    }
  `,
  DetailList: styled.ul<{ $isOpen: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    padding-top: 10px;
  `,
  DetailListItem: styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
  Label: styled.label`
    margin-left: 5px;
  `,
};

export default SearchFilter;
