import { useCategories } from '../../hooks/api/useCategories';
import SearchFilter from './SearchFilter';
import styled from 'styled-components';

interface IProps {
  onFilterCloseClick: () => void;
}

const SearchFilterList = ({ onFilterCloseClick }: IProps) => {
  const { filterList } = useCategories();
  if (!filterList) return null;

  return (
    <StyledFilterListWrap>
      {filterList.map((item, index) => (
        <SearchFilter filter={item} key={index} />
      ))}
      <StyledFilterCloseButton onClick={onFilterCloseClick}>X</StyledFilterCloseButton>
    </StyledFilterListWrap>
  );
};

const StyledFilterListWrap = styled.div`
  position: relative;
  padding-bottom: 20px;

  @media only screen and (max-width: 900px) {
    padding-top: 50px;
  }
`;

const StyledFilterCloseButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  border: 1px solid black;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

export default SearchFilterList;
