// import { useSearchParams } from 'react-router-dom';
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { styled } from 'styled-components';
import { useCategories } from '../hooks/api/useCategories';
import { useSearchParams } from 'react-router-dom';
import Button from '../components/filter/Button';
import SearchFilterList from '../components/filter/SearchFilterList';
import ProductSearch from '../components/product/ProductSearch';
import { useState } from 'react';

export default function SearchPage() {
  // NOTE http://localhost:3000/search?query='검색어'
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query') || window.encodeURIComponent(' ');
  const [isOpen, setIsOpen] = useState(false);

  // 리액트 쿼리 : 카테고리 가져오기
  const { data: categories } = useCategories();

  const [, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: withDefault(StringParam, keyword),
  });

  if (!categories) return null;

  const handleButtonClick = () => {
    setQuery(
      {
        page: 1,
        query: keyword,
      },
      'replace',
    );
    window.location.reload();
  };

  const handleFilterClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  // console.log('-----------------------------------');
  // console.log('data: ' + JSON.stringify(categories));
  // console.log('isLoading: ' + isLoadingCategories);
  // console.log('isError: ' + isErrorCategories);
  // console.log('errorMsg: ' + errorCategoriesMsg);
  // console.log('-----------------------------------');

  return (
    <StyledWrap>
      <StyledFilter isOpen={isOpen}>
        <SearchFilterList data={categories} onFilterCloseClick={handleFilterClick} />
        <Button handleButtonClick={handleButtonClick} />
      </StyledFilter>
      <StyledFilterButton onClick={handleFilterClick}>FILTER</StyledFilterButton>
      <ProductSearch keyword={keyword} />
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

const StyledFilter = styled.section<{ isOpen: boolean }>`
  display: flex;
  width: 300px;
  height: 100%;
  padding: 20px 0;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (max-width: 900px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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
