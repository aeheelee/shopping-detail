import styled from 'styled-components';
import CategoryMenuItem from './CategoryMenuItem';
import { useCategories } from '../../hooks/api/useCategories';

const CategoryMenu = () => {
  const { categoryMenu } = useCategories();

  return (
    <StyledWrap>
      <ul>
        {categoryMenu.map((category, index) => (
          <CategoryMenuItem key={index} data={category} />
        ))}
      </ul>
    </StyledWrap>
  );
};

export default CategoryMenu;

const StyledWrap = styled.div`
  margin-top: 30px;
  @media only screen and (max-width: 900px) {
    overflow-x: auto;
    margin-top: 0;
    ul {
      display: flex;
      align-items: center;
    }
  }
`;
