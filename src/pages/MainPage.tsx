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
