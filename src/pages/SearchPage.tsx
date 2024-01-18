import { useSearchParams } from 'react-router-dom';
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { styled } from 'styled-components';
import Button from '../components/filter/Button';
import ProductList from '../components/product/ProductList';
import Pagination from '../components/Pagination';
import SearchFilterList from '../components/filter/SearchFilterList';
import { useCategories } from '../hooks/api/Categories';
import useSearch from '../hooks/api/Search';
import LoadingIndicator from '../components/LoadingIndicator';

export default function SearchPage() {
  // NOTE http://localhost:3000/search?query='검색어'
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query') || window.encodeURIComponent(' ');

  // 리액트 쿼리 : 카테고리 가져오기
  const { data: categories, isLoading: isLoadingCategories = true } = useCategories();

  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: withDefault(StringParam, keyword),
    category: NumberParam,
    minDiscount: NumberParam,
    maxDiscount: NumberParam,
    minPrice: NumberParam,
    maxPrice: NumberParam,
  });

  const { data: products } = useSearch({ ...query });

  if (!categories) return null;
  if (!products) return null;

  const handleChangePage = (page: number) => {
    setQuery({ page });
    window.scrollTo(0, 0);
  };

  const handleButtonClick = () => {
    setQuery(
      {
        page: 1,
        query: keyword,
        category: undefined,
        minDiscount: undefined,
        maxDiscount: undefined,
        minPrice: undefined,
        maxPrice: undefined,
      },
      'replaceIn',
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
      <StyledContent>
        <StyledText>
          <strong>{products.totalItems}</strong>개 결과
        </StyledText>
        {isLoadingCategories ? (
          <LoadingIndicator />
        ) : (
          <>
            {products.items.length === 0 ? <div>찾으시는 상품이 없어요.</div> : <ProductList data={products.items} />}
          </>
        )}
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
