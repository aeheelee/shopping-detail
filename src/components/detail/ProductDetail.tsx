import React from 'react';
import styled from 'styled-components';
import { detailData } from '../../constants/productDetail.mockup';
import Button from '../Button';

const ProductDetail = () => {
  const data = detailData;
  const infoHtml = `${data.info}`;

  const handleButtonClick = () => {
    alert('해당 기능은 오픈 준비중입니다.');
  };

  return (
    <StyledWrap>
      <StyledImgBox>
        <img src={data.imageUrl} alt={data.title} />
      </StyledImgBox>
      <StyledContent.Wrap>
        <StyledContent.Title>상품정보</StyledContent.Title>
        <StyledContent.Info dangerouslySetInnerHTML={{ __html: infoHtml }} />
        <StyledContent.customer>
          <dl>
            <dt>판매량</dt>
            <dd>{data.purchaseStatus.totalSales.toLocaleString()}</dd>
          </dl>
          <dl>
            <dt>좋아요 수</dt>
            <dd>{data.like.toLocaleString()}</dd>
          </dl>
          <dl>
            <dt>구매 만족도</dt>
            <dd>{data.purchaseStatus.satisfaction} / 5.0</dd>
          </dl>
        </StyledContent.customer>
        <StyledContent.priceWrap>
          <StyledContent.price>
            ₩{data.price.toLocaleString()}
            <span>{data.discountPercentage}% 할인</span>
          </StyledContent.price>
          <StyledContent.discountPrice>₩{data.discountPrice.toLocaleString()}</StyledContent.discountPrice>
        </StyledContent.priceWrap>
        <StyledContent.ButtonWrap>
          <Button title="장바구니 담기" color="black" buttonClick={handleButtonClick} />
          <Button title="구매하기" color="blue" buttonClick={handleButtonClick} />
        </StyledContent.ButtonWrap>
      </StyledContent.Wrap>
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  display: flex;
`;

const StyledImgBox = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: center;
  width: 35%;
  /* height: 500px; */
  padding: 15px;
  background-color: #e9e9e9;
`;

const StyledContent = {
  Wrap: styled.div`
    width: 65%;
    padding: 20px;
    box-sizing: border-box;
  `,

  Title: styled.p`
    margin-bottom: 10px;
    color: blueviolet;
  `,

  Info: styled.div`
    margin-bottom: 25px;

    > h1 {
      margin-bottom: 5px;
      color: blue;
      font-size: 20px;
      font-weight: 700;
    }
  `,

  customer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 15px 0;
    box-sizing: border-box;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    text-align: center;

    dl {
      position: relative;

      &:before {
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 1px;
        height: 80%;
        background-color: #e9e9e9;
        transform: translateY(-50%);
        content: '';
      }

      &:first-child:before {
        display: none;
      }
    }

    dt {
      color: blueviolet;
    }
  `,

  priceWrap: styled.div`
    margin: 10px 0 20px;
  `,

  price: styled.p`
    font-size: 13px;
    text-decoration: line-through;

    span {
      display: inline-block;
      margin-left: 5px;
      color: orange;
      text-decoration: none;
    }
  `,

  discountPrice: styled.p`
    color: blue;
    font-size: 18px;
  `,

  ButtonWrap: styled.div`
    display: flex;
    gap: 10px;
  `,
};

export default ProductDetail;
