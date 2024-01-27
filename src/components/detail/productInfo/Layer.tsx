import styled from 'styled-components';

interface IProps {
  image: string;
  isOpen: boolean;
  onLayer: () => void;
}
const Layer = ({ image, isOpen, onLayer }: IProps) => {
  return (
    <StyledWrap $isOpen={isOpen}>
      <StyledInner>
        <StyledButton onClick={() => onLayer()}>X</StyledButton>
        <img src={image} />
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
  padding: 20px 50px;
  border: 2px solid black;
  background-color: #fff;
  z-index: 100;
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid red;
`;
