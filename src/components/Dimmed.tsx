import { useResetAtom } from 'jotai/utils';
import styled from 'styled-components';
import { imageLayerAtom } from '../store/atoms/imageLayerAtom';

const Dimmed = () => {
  const closeImageLayer = useResetAtom(imageLayerAtom);

  const handleClick = () => {
    closeImageLayer();
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
