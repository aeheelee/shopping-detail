// import { useSearchParams } from 'react-router-dom';
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { styled } from 'styled-components';
import { useCategories } from '../hooks/api/Categories';
import { useSearchParams } from 'react-router-dom';
import Button from '../components/filter/Button';
import SearchFilterList from '../components/filter/SearchFilterList';
import ProductWrap from '../components/product/ProductWrap';

export default function SearchPage() {
  // NOTE http://localhost:3000/search?query='검색어'
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query') || window.encodeURIComponent(' ');

  // 리액트 쿼리 : 카테고리 가져오기
  const { data: categories } = useCategories();

  const [, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: StringParam,
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
  };

  // console.log('-----------------------------------');
  // console.log('data: ' + JSON.stringify(categories));
  // console.log('isLoading: ' + isLoadingCategories);
  // console.log('isError: ' + isErrorCategories);
  // console.log('errorMsg: ' + errorCategoriesMsg);
  // console.log('-----------------------------------');

  return (
    <StyledWrap>
      <StyledFilter>
        <SearchFilterList data={categories} />
        <Button handleButtonClick={handleButtonClick} />
      </StyledFilter>
      <ProductWrap keyword={keyword} />
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
`;

const StyledFilter = styled.section`
  display: flex;
  width: 300px;
  height: 100%;
  padding: 20px 0;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (max-width: 900px) {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    background-color: #fff;
    z-index: 10;
  }
`;
