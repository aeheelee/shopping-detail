import { useState, Suspense } from 'react';
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useResetAtom } from 'jotai/utils';
import { filtersDropDownAtom } from '../store/atoms/filtersDropDownAtom';
import SearchFilterList from '../components/filter/SearchFilterList';
import ProductSearch from '../components/product/ProductSearch';
import LoadingIndicator from '../components/LoadingIndicator';
import Button from '../components/Button';

export default function SearchPage() {
  // NOTE http://localhost:3000/search?query='검색어'
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query') || window.encodeURIComponent(' ');
  const [isOpen, setIsOpen] = useState(false);
  const resetFiltersDropDown = useResetAtom(filtersDropDownAtom);

  const [, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: withDefault(StringParam, keyword),
  });

  const handleResetButtonClick = () => {
    setQuery(
      {
        page: 1,
        query: keyword,
      },
      'replace',
    );

    resetFiltersDropDown();
  };

  const handleFilterClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledWrap>
      <StyledFilter $isOpen={isOpen}>
        <SearchFilterList onFilterCloseClick={handleFilterClick} />
        <Button title="초기화" buttonClick={handleResetButtonClick} />
      </StyledFilter>
      <StyledFilterButton onClick={handleFilterClick}>FILTER</StyledFilterButton>
      <Suspense fallback={<LoadingIndicator />}>
        <ProductSearch keyword={keyword} />
      </Suspense>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  align-items: flex-start;
  gap: 0 20px;
  z-index: 1;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    z-index: 10;
  }
`;

const StyledFilter = styled.section<{ $isOpen: boolean }>`
  display: flex;
  width: 300px;
  height: 100%;
  padding: 20px 0;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (max-width: 900px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    z-index: 10;
  }
`;

const StyledFilterButton = styled.button`
  display: none;
  padding: 5px 10px;
  border: 2px solid blue;
  border-radius: 5px;
  font-size: 17px;
  font-weight: bold;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;
