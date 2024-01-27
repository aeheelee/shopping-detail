import styled from 'styled-components';

interface IProps {
  writer: string;
  content: string;
}

const ReviewItem = ({ writer, content }: IProps) => (
  <StyledBox>
    <StyledNickname>{writer}</StyledNickname>
    <StyledComment>{content}</StyledComment>
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
