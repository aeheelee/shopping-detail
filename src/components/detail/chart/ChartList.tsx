import styled from 'styled-components';
import ChartPie from './ChartPie';
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
        <StyledPie>
          <ChartPie gender={gender} />
        </StyledPie>
      </StyledContents>
    </StyledWrap>
  );
};

export default ChartList;

const StyledWrap = styled.section`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 20px;
  box-sizing: border-box;
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
    height: 100%;
  }
`;

const StyledPie = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  canvas {
    width: 100%;
  }
`;
