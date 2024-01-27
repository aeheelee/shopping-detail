import styled from 'styled-components';

import { IcEmptyStars, IcStars } from '../../../assets';

const StarRate = () => {
  const number = 4;
  const percentageRate = (100 / 5) * number;

  return (
    <StyledStarWrap>
      <StyledStarContent>
        <StyledStarFull>
          <IcEmptyStars title="총점 5점" />
          <StyledStarFill setWidth={percentageRate}>
            <IcStars />
          </StyledStarFill>
        </StyledStarFull>
      </StyledStarContent>
    </StyledStarWrap>
  );
};

const StyledStarWrap = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-size: 10px;
  color: #ff923a;
  line-height: 1;
`;

const StyledStarContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 14px;
  margin-right: 3px;
`;

const StyledStarFull = styled.div`
  position: relative;

  svg {
    width: 58px;
    height: 14px;
  }
`;

const StyledStarFill = styled.div<{ setWidth: number }>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ setWidth }) => `${setWidth}%`};
  height: 100%;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default StarRate;
