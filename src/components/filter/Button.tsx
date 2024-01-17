import React from 'react';
import styled from 'styled-components';

interface IProps {
  handleButtonClick: () => void;
}

const Button = ({ handleButtonClick }: IProps) => {
  return (
    <StyleButton type="button" onClick={handleButtonClick}>
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
