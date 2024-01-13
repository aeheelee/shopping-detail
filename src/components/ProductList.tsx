import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { ProductItemsType, ProductType } from '../types/CommonTypes';

interface IProps {
  data: ProductType;
}

const ProductList = ({ data }: IProps) => {
  const [productsData, setProductsData] = useState<ProductItemsType[]>([]);

  const productList = data.items;

  useEffect(() => {
    setProductsData(productList);
  }, [productList]);

  return (
    <StyledWrap>
      {productsData.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </StyledWrap>
  );
};

export default ProductList;

const StyledWrap = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
