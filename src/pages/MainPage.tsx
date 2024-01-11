import ProductList from '../components/ProductList';
import SearchFilterList from '../components/SearchFilterList';

export default function MainPage() {
  // Phase1 작업물을 추가합니다.
  return (
    <main>
      <SearchFilterList />
      <ProductList />
    </main>
  );
}
