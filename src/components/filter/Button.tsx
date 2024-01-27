import React from 'react';
import styled from 'styled-components';

interface IProps {
  handleResetButtonClick: () => void;
}

const Button = ({ handleResetButtonClick }: IProps) => {
  return (
    <StyleButton type="button" onClick={handleResetButtonClick}>
      초기화
    </StyleButton>
  );
};

const StyleButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: green;
  color: white;
`;
export default Button;
