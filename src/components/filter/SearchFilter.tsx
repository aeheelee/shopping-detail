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
      setQuery({ [param]: item.title === '전체' ? undefined : value }, 'pushIn');
    };

    //각 카테고리 parameter set
    // 리뷰: SearchFilterList 컴포넌트에서 filter.type을 enum으로 정의한 리뷰
    // 내용을 적용하시면 SearchFilterList 와 SearchFilter 양쪽 컴포넌드들에서 좀 더 안전하게, string
    // 값들을 사용하지 않고 filter.type을 관리하실 수 있습니다.
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
                  // return item.id === query.category || (item.id === 0 && query.category === undefined);
                  // 리뷰: 위와 같이 쓰시면 true값을 뱉는데 있어 더 간결해질 것 같아요!
                  if (query.category === undefined && item.id === 0) return true;
                  return item.id === query.category;
                case 'price':
                case 'discount':
                  // 리뷰
                  // price와 discount의 케이스를 모두 묶어 처리하신 것 같은데요.
                  // 나쁘지 않지만, 관리, 확장 측면에선 코드 가독성 차원에선 통합해서 처리하기보단 분리하시는 것도 좋을 것 같습니다.
                  // 반드시 코드량을 줄여야하는것맞이 정답은 아닐 수 있고, 이런 경우에는 코드량이 늘어나더라도 분리하는 것이 좋습니다.
                  // 요구사항이 추가, 변경되어 필터 타입이 추가되는 경우 (e.g. 신규 이벤트나 광고 등), 그냥 추가하면 되는 것이 아니라 기존 price, discount 로직을 수정해야 하기 때문입니다.
                  const key = filter.type === 'price' ? 'minPrice' : 'minDiscount';
                  if (query[key] === undefined && item.id === 0) return true;
                  return 'min' in item && item.min === query[key];
                default:
                  return false;
              }
            })();

            return (
              <StyledFilterItem.DetailListItem key={index}>
                {/* 리뷰
                필터 라디오 인풋은 컴포넌트로 따로 정의해서 사용하시는 것이 관리에 용이하겠습니다  */}
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
        !$isOpen ? 'translate(-50%, -50%) rotate(-135deg)' : 'translate(-50%, -50%) rotate(45deg)'};
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
