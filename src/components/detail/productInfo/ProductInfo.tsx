import styled from 'styled-components';
import { ProductDetailType } from '../../../types/CommonTypes';
import Button from '../../common/Button';
import Layer from './Layer';
// import { useAtom } from 'jotai';
// import { imageLayerAtom } from '../../../store/atoms/imageLayerAtom';
import DOMPurify from 'dompurify';
import CreatePortal from '../../common/CreatePortal';
import Dimmed from '../../common/Dimmed';
import { useState } from 'react';

interface IProductInfo {
  data: ProductDetailType;
}

const ProductInfo = ({ data: detailData }: IProductInfo) => {
  // const [isOpenLayer, setIsOpenLayer] = useAtom(imageLayerAtom);
  const [isOpenLayer, setIsOpenLayer] = useState(false);

  /**
   *  NOTE: Sanitizer API는 임의의 문자열이 페이지에 안전하게 삽입될 수 있도록 하는 것
   * 단순히 문자열로 DOM을 조작하면 크로스 사이트 스크립팅(XSS)이 일어난다(악성코드)
   * DOMPurfy는 브라우저에 Sanitizer API가 구현되지 않는 경우 대체 역할을 하는 노드 패키지
   * https://velog.io/@dosomething/DOM-%EC%A1%B0%EC%9E%91%EA%B3%BC-%ED%81%AC%EB%A1%9C%EC%8A%A4-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85
   */
  const sanitizedInfoHtml = DOMPurify.sanitize(detailData.info);

  const handleButtonClick = () => {
    alert('서비스 준비중입니다');
  };

  const handleImageClick = () => {
    setIsOpenLayer((prev) => !prev);
  };

  return (
    <StyledWrap>
      <StyledImgBox onClick={handleImageClick}>
        <img src={detailData.imageUrl} alt={detailData.title} />
      </StyledImgBox>
      <StyledContent.Wrap>
        <StyledContent.Title>상품정보</StyledContent.Title>
        <StyledContent.Info dangerouslySetInnerHTML={{ __html: sanitizedInfoHtml }} />
        <StyledContent.customer>
          <dl>
            <dt>판매량</dt>
            <dd>{detailData.purchaseStatus.totalSales.toLocaleString()}</dd>
          </dl>
          <dl>
            <dt>좋아요 수</dt>
            <dd>{detailData.like.toLocaleString()}</dd>
          </dl>
          <dl>
            <dt>구매 만족도</dt>
            <dd>{detailData.purchaseStatus.satisfaction} / 5.0</dd>
          </dl>
        </StyledContent.customer>
        <StyledContent.priceWrap>
          {detailData.discountPercentage === 0 ? null : (
            <StyledContent.price>
              ₩{detailData.price.toLocaleString()}
              <span>{detailData.discountPercentage}% 할인</span>
            </StyledContent.price>
          )}
          <StyledContent.discountPrice>₩{detailData.discountPrice.toLocaleString()}</StyledContent.discountPrice>
        </StyledContent.priceWrap>
        <StyledContent.ButtonWrap>
          <Button title="장바구니 담기" color="black" buttonClick={handleButtonClick} />
          <Button title="구매하기" color="blue" buttonClick={handleButtonClick} />
        </StyledContent.ButtonWrap>
      </StyledContent.Wrap>
      <CreatePortal>
        <>
          <Layer image={detailData.imageUrl} onLayer={handleImageClick} isOpen={isOpenLayer} />
          {isOpenLayer && <Dimmed onClose={handleImageClick} />}
        </>
      </CreatePortal>
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  display: flex;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledImgBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  flex-shrink: 0;
  padding: 15px;
  background-color: #e9e9e9;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const StyledContent = {
  Wrap: styled.div`
    flex: 1;
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

export default ProductInfo;
