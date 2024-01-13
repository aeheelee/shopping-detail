import ProductCard from './ProductCard';
import styled from 'styled-components';
import { ProductItemsType } from '../types/CommonTypes';

interface IProps {
  data: ProductItemsType[];
}

const ProductList = ({ data }: IProps) => {
  return (
    <StyledWrap>
      {data.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </StyledWrap>
  );
};

export default ProductList;

const StyledWrap = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;

  @media only screen and (max-width: 900px) {
    overflow: hidden;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
