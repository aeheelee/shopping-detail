import styled from 'styled-components';
import ProductMain from '../components/product/ProductMain';
import CategoryMenu from '../components/category/CategoryMenu';

export default function MainPage() {
  return (
    <StyledWrap>
      <StyledTop>
        <CategoryMenu />
      </StyledTop>
      <ProductMain />
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

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    z-index: 10;
  }
`;

const StyledTop = styled.div`
  width: 300px;
  height: 100%;
  padding: 20px 0;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
