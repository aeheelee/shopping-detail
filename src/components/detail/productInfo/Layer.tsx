import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

interface IProps {
  image: string;
  isOpen: boolean;
  onLayer: () => void;
}
const Layer = ({ image, isOpen, onLayer }: IProps) => {
  return (
    <StyledWrap $isOpen={isOpen}>
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

const StyledWrap = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border: 2px solid black;
  background-color: #fff;
  z-index: 100;
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px 0;
  width: 500px;
  max-height: 800px;
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
