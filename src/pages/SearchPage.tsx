// import { useSearchParams } from "react-router-dom";
import { useCategories } from "../query/Categories";

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

  console.log("-----------------------------------");
  console.log("data: " + JSON.stringify(categories));
  console.log("isLoading: " + islLoadingCategories);
  console.log("isError: " + isErrorCategories);
  console.log("errorMsg: " + errorCategoriesMsg);
  console.log("-----------------------------------");

  return <div>검색 페이지 입니다.</div>;
}
