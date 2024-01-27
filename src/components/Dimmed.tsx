import { useState } from 'react';
import styled from 'styled-components';

interface IProps {
  onDimmed: (isOpen: boolean) => void;
}

const Dimmed = ({ onDimmed }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
    onDimmed(isOpen);
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
  z-index: 50;
  background-color: #000;
  opacity: 0.7;
`;
