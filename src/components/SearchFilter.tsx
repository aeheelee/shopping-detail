import React, { useState } from "react";
import styled from "styled-components";
import { filterList } from "../constants/filterList.constant";

interface OpenStatesProps {
  id: number;
  isOpen: boolean;
}

const SearchFilter = () => {
  const [openStates, setOpenStates] = useState<OpenStatesProps[]>([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
  ]);

  const handleButtonClick = (itemId: number) => {
    setOpenStates((prevStates) => {
      return prevStates.map((state) =>
        state.id === itemId ? { ...state, isOpen: !state.isOpen } : state,
      );
    });
  };

  const getIsOpen = (itemId: number) =>
    openStates.find((state) => state.id === itemId)?.isOpen ?? false;

  return (
    <>
      {filterList.map((item) => (
        <StyledFilterItem.Wrap key={item.id}>
          <StyledFilterItem.ButtonTitle
            type="button"
            onClick={() => handleButtonClick(item.id)}
          >
            {item.title}
            <StyledFilterItem.ButtonIcon $isOpen={getIsOpen(item.id)}>
              {getIsOpen(item.id)
                ? "필터 선택 리스트 열림"
                : "필터 선택 리스트 닫힘"}
            </StyledFilterItem.ButtonIcon>
          </StyledFilterItem.ButtonTitle>
          <StyledFilterItem.DetailList $isOpen={getIsOpen(item.id)}>
            {item.filterChoice.map((filterChoice, index) => (
              <StyledFilterItem.DetailListItem key={index}>
                <input
                  type="radio"
                  id={`${item.category}_${index}`}
                  name={item.category}
                />
                <StyledFilterItem.Label htmlFor={`${item.category}_${index}`}>
                  {filterChoice}
                </StyledFilterItem.Label>
              </StyledFilterItem.DetailListItem>
            ))}
          </StyledFilterItem.DetailList>
        </StyledFilterItem.Wrap>
      ))}
    </>
  );
};

const StyledFilterItem = {
  Wrap: styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid #d1d1d1;
  `,
  ButtonTitle: styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: purple;
  `,
  ButtonIcon: styled.i<{ $isOpen: boolean }>`
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    font-size: 0;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      -webkit-transform: translate(-50%, -50%) rotate(45deg);
      transform: ${({ $isOpen }) =>
        $isOpen
          ? "translate(-50%, -50%) rotate(-135deg)"
          : "translate(-50%, -50%) rotate(45deg)"};
      margin-top: 2px;
      border-top: 1px solid #333;
      border-left: 1px solid #333;
    }
  `,
  DetailList: styled.ul<{ $isOpen: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    padding-top: 10px;
  `,
  DetailListItem: styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
  Label: styled.label`
    margin-left: 5px;
  `,
};

export default SearchFilter;
