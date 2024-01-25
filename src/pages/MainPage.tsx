import styled from 'styled-components';
import ProductMain from '../components/product/ProductMain';
import CategoryMenu from '../components/category/CategoryMenu';

export default function MainPage() {
  return (
    <main>
      <StyledTop>
        <CategoryMenu />
      </StyledTop>
      <StyledContainer>
        {/* <Route path="/" element={<ProductList setPath={setPath} />} />
        <Route path="/:category" element={<ProductList setPath={setPath} />} /> */}
        <ProductMain />
      </StyledContainer>
    </main>
  );
}

const StyledContainer = styled.div``;

const StyledTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 0 20px;
`;
