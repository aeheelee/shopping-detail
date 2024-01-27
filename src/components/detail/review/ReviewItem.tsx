import styled from 'styled-components';

const ReviewItem = () => (
  <StyledBox>
    <StyledNickname>닉네임</StyledNickname>
    <StyledComment>제품 퀄리티가 많이 떨어집니다. 돈이 아까워요.</StyledComment>
  </StyledBox>
);

const StyledBox = styled.div``;
const StyledNickname = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const StyledComment = styled.p`
  font-size: 14px;
`;

export default ReviewItem;
