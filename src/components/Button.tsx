import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return <StyleButton type="button">초기화</StyleButton>;
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
