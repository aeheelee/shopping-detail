import styled from 'styled-components';
import { ProductItemsType } from '../types/CommonTypes';

interface Props {
  data: ProductItemsType;
}
const ProductCard = ({ data }: Props) => {
  const { title, price, discountPercentage, discountPrice, imageUrl } = data;

  return (
    <StyledWrap>
      <StyledThumbnail>
        <img src={imageUrl} alt={title} />
      </StyledThumbnail>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledPriceBox>
          <StyledPrice>{price}</StyledPrice>
          <StyledDiscountPercentage>{discountPercentage}</StyledDiscountPercentage>
          <StyledDiscountPrice>{discountPrice}</StyledDiscountPrice>
        </StyledPriceBox>
      </StyledContent>
    </StyledWrap>
  );
};

export default ProductCard;

const StyledWrap = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 0;
`;

const StyledThumbnail = styled.div`
  position: relative;
  display: block;
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding-bottom: calc(125%);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledContent = styled.div`
  display: block;
  padding-top: 10px;
`;

const StyledTitle = styled.strong`
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledPriceBox = styled.div`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  line-height: 20px;
`;

const StyledPrice = styled.span`
  display: inline-block;
  color: rgb(10, 15, 24);
  text-decoration: line-through;
`;

const StyledDiscountPercentage = styled.span`
  color: rgb(184, 49, 40);
`;

const StyledDiscountPrice = styled.strong`
  display: block;
`;
