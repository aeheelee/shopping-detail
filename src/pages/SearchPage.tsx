// import { useSearchParams } from "react-router-dom";
import { styled } from 'styled-components';
import Button from '../components/Button';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import SearchFilterList from '../components/filter/SearchFilterList';
import { useCategories } from '../hooks/api/Categories';
import { useSearch } from '../hooks/api/Search';

export default function SearchPage() {
  // 검색어 + 필터 설정은 전부 Query Parameter로 설정 및 사용 됩니다.
  // useSearchParams을 이용해서 Query 정보를 관리 해 보세요.
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get("query");

  // 리액트 쿼리 : 카테고리 가져오기
  const {
    data: categories,
    isLoading: islLoadingCategories = true,
    isError: isErrorCategories = false,
    error: errorCategoriesMsg = null,
  } = useCategories();

  const { data: products } = useSearch();

  if (!categories) return null;
  if (!products) return null;

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
          <strong>19</strong>개 결과
        </StyledText>
        <ProductList data={products} />
        <Pagination />
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
