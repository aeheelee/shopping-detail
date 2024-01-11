// import { useSearchParams } from "react-router-dom";
import { styled } from 'styled-components';
import Button from '../components/Button';
import ProductList from '../components/ProductList';
import SearchFilter from '../components/SearchFilter';
import { useCategories } from '../query/Categories';

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

  console.log('-----------------------------------');
  console.log('data: ' + JSON.stringify(categories));
  console.log('isLoading: ' + islLoadingCategories);
  console.log('isError: ' + isErrorCategories);
  console.log('errorMsg: ' + errorCategoriesMsg);
  console.log('-----------------------------------');

  return (
    <StyledWrap>
      <StyledFilter>
        <SearchFilter />
        <Button />
      </StyledFilter>
      <StyledContent>
        <ProductList />
      </StyledContent>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
  display: flex;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  align-items: flex-start;
  gap: 0 20px;
`;

const StyledFilter = styled.section`
  display: flex;
  width: 300px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContent = styled.section`
  flex: 1;
`;
