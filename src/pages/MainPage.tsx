import ProductList from '../components/product/ProductList';
import useSearch from '../hooks/api/Search';

export default function MainPage() {
  // Phase1 작업물을 추가합니다.
  const {
    data: products,
    isLoading: islLoadingProducts = true,
    isError: isErrorProducts = false,
    error: errorProductsMsg = null,
  } = useSearch();

  if (!products) {
    return null;
  }

  console.log('-----------------------------------');
  console.log('data: ' + JSON.stringify(products));
  console.log('isLoading: ' + islLoadingProducts);
  console.log('isError: ' + isErrorProducts);
  console.log('errorMsg: ' + errorProductsMsg);
  console.log('-----------------------------------');
  return (
    <main>
      <ProductList data={products.items} />
    </main>
  );
}
