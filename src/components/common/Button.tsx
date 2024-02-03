import styled from 'styled-components';

interface IButton {
  title: string;
  color?: string;
  buttonClick?: () => void;
}

const Button = ({ title, color = 'green', buttonClick }: IButton) => {
  return (
    <StyleButton type="button" color={color} onClick={buttonClick}>
      {title}
    </StyleButton>
  );
};

const StyleButton = styled.button<{ color?: string }>`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: ${({ color }) => (color ? color : 'green')};
  color: white;
`;
export default Button;
