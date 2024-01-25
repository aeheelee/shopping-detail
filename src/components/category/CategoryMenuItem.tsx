import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CategoryMenuItem = ({ data }) => {
  const { id, title, imageUrl } = data;
  // 경로가 root인 경우 path 체크
  const path = id ? `/${id}` : '/';

  return (
    <StyledWrap>
      <StyledLink to={`${path}`}>
        <img src={imageUrl} alt={title} />
        {title}
      </StyledLink>
    </StyledWrap>
  );
};

export default CategoryMenuItem;

const StyledWrap = styled.li`
  & + & {
    margin-top: 10px;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 15px;
  color: grey;
  text-decoration: none;

  &.active {
    border-radius: 4px;
    background-color: rgb(83, 190, 142);
    font-weight: bold;
    color: white;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    vertical-align: top;
  }
`;