// import { useSearchParams } from "react-router-dom";
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { styled } from 'styled-components';
import Button from '../components/Button';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import SearchFilterList from '../components/filter/SearchFilterList';
import { useCategories } from '../hooks/api/Categories';
import useSearch from '../hooks/api/Search';
import { useSearchParams } from 'react-router-dom';

export default function SearchPage() {
  // 검색어 + 필터 설정은 전부 Query Parameter로 설정 및 사용 됩니다.
  // useSearchParams을 이용해서 Query 정보를 관리 해 보세요.
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '%20';
  //검색바에서 검색어를 setSearchParam넣어서 updatae..
  // setSearchParams();
  console.log(setSearchParams);

  // 리액트 쿼리 : 카테고리 가져오기
  const {
    data: categories,
    isLoading: islLoadingCategories = true,
    isError: isErrorCategories = false,
    error: errorCategoriesMsg = null,
  } = useCategories();

  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: withDefault(StringParam, keyword),
  });
  console.log(query);

  const { data: products } = useSearch({ ...query });

  if (!categories) return null;
  if (!products) return null;

  const handleChangePage = (page: number) => {
    setQuery({ page });
    window.scrollTo(0, 0);
  };

  console.log('-----------------------------------');
  console.log('data: ' + JSON.stringify(categories));
  console.log('isLoading: ' + islLoadingCategories);
  console.log('isError: ' + isErrorCategories);
  console.log('errorMsg: ' + errorCategoriesMsg);
  console.log('-----------------------------------');

  return (
    <StyledWrap>
      <StyledFilter>
        <SearchFilterList data={categories} />
        <Button />
      </StyledFilter>
      <StyledContent>
        <StyledText>
          <strong>{products.totalItems}</strong>개 결과
        </StyledText>
        <ProductList data={products} />
        <Pagination maxPage={products.maxPage} currentPage={query.page} onPageChange={handleChangePage} />
      </StyledContent>
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

const StyledContent = styled.section`
  flex: 1;
`;

const StyledText = styled.p`
  padding: 12px 0;
  font-size: 14px;
`;
