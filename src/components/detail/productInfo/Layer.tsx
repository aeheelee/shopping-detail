import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

interface IProps {
  image: string;
  onLayer: () => void;
}
const Layer = ({ image, onLayer }: IProps) => {
  return (
    <StyledWrap>
      <StyledInner>
        <StyledButton onClick={() => onLayer()}>
          <IoClose size={20} />
        </StyledButton>
        <StyledImage>
          <img src={image} />
        </StyledImage>
      </StyledInner>
    </StyledWrap>
  );
};

export default Layer;

const StyledWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  padding: 30px;
  border: 2px solid black;
  background-color: #fff;
  z-index: 30;

  @media only screen and (max-width: 900px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate(0, 0);
    padding: 20px 0;
  }
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px 0;
  width: 500px;
  max-height: 800px;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const StyledImage = styled.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid black;

  svg {
    width: 100%;
  }
`;
