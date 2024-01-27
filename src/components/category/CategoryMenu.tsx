import styled from 'styled-components';
import CategoryMenuItem from './CategoryMenuItem';
import { useCategories } from '../../hooks/api/useCategories';

const CategoryMenu = () => {
  const { data } = useCategories();

  if (!data) return null;

  const categories = [
    {
      id: 0,
      category: '',
      title: '전체',
      imageUrl:
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    ...data.product,
  ];

  return (
    <StyledWrap>
      <ul>
        {categories.map((category, index) => (
          <CategoryMenuItem key={index} data={category} />
        ))}
      </ul>
    </StyledWrap>
  );
};

export default CategoryMenu;

const StyledWrap = styled.div`
  margin-top: 30px;
`;
