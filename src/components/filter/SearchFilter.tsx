import React, { useEffect, useMemo, useState } from 'react';
import { NumberParam, useQueryParams, withDefault } from 'use-query-params';
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
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const [, setQuery] = useQueryParams({
    category: withDefault(NumberParam, 0),
    minDiscount: withDefault(NumberParam, 0),
    maxDiscount: withDefault(NumberParam, 0),
    minPrice: withDefault(NumberParam, 0),
    maxPrice: withDefault(NumberParam, 0),
  });

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  console.log('필터항목 클릭 : ' + selectedItemId);

  const handleChange = (item: IData, type: string) => {
    setSelectedItemId(item.id);

    //각 카테고리 parameter set
    switch (type) {
      case 'product':
        setQuery({ category: item.id });
        break;
      case 'discount':
        if (item.min !== undefined && item.max !== undefined) {
          setQuery({ minDiscount: item.min });
          setQuery({ maxDiscount: item.max });
        }
        break;
      case 'price':
        if (item.min !== undefined && item.max !== undefined) {
          setQuery({ minPrice: item.min });
          setQuery({ maxPrice: item.max });
        }
        break;
      default:
        console.log('선택한 값이 없어요');
    }
  };

  //필터 데이터
  const filterData = useMemo(() => [{ id: 0, title: '전체' }, ...filter.data], [filter.data]);

  useEffect(() => {
    // 첫 번째 아이템의 id를 초기 선택 값으로 설정
    if (filterData.length > 0) {
      setSelectedItemId(filterData[0].id);
    }
  }, [filterData]);

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
          {filterData.map((item, index) => (
            <StyledFilterItem.DetailListItem key={index}>
              <input
                type="radio"
                id={`${filter.type}_${item.id}`}
                name={filter.type}
                checked={item.id === selectedItemId}
                onChange={() => handleChange(item, filter.type)}
              />
              <StyledFilterItem.Label htmlFor={`${filter.type}_${item.id}`}>{item.title}</StyledFilterItem.Label>
            </StyledFilterItem.DetailListItem>
          ))}
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
