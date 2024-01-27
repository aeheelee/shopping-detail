import styled from 'styled-components';
import ChartDoughnut from './ChartDoughnut';
import ChartBar from './ChartBar';
import { AgeType, genderType } from '../../../types/CommonTypes';

interface IProps {
  data: {
    age: AgeType;
    gender: genderType;
  };
}

const ChartList = ({ data }: IProps) => {
  const { age, gender } = data;

  return (
    <StyledWrap>
      <StyledContents>
        <StyledBar>
          <ChartBar age={age} />
        </StyledBar>
        <StyledDoughnut>
          <ChartDoughnut gender={gender} />
        </StyledDoughnut>
      </StyledContents>
    </StyledWrap>
  );
};

export default ChartList;

const StyledWrap = styled.section`
  /* 임시값 */
  max-width: 900px;
  margin: 0 auto;
  padding-top: 100px;
`;

const StyledContents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledBar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  canvas {
    width: 100%;
  }
`;

const StyledDoughnut = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  canvas {
    width: 100%;
  }
`;
