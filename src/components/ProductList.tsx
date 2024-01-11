import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import productsList from '../resource/productList';
import { ProductType } from '../types/CommonTypes';

const ProductList = () => {
  const [productsData, setProductsData] = useState<ProductType[]>([]);

  const productList: ProductType[] = productsList.items;

  useEffect(() => {
    setProductsData(productList);
  }, []);

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
  margin-top: 30px;

  @media only screen and (max-width: 900px) {
    overflow: hidden;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
