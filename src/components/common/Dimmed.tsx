import styled from 'styled-components';
interface IProps {
  onClose: () => void;
}

const Dimmed = ({ onClose }: IProps) => {
  const handleClick = () => {
    onClose();
  };

  return <StyledDimmed onClick={handleClick} />;
};

export default Dimmed;

const StyledDimmed = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  background-color: #000;
  opacity: 0.7;
`;
