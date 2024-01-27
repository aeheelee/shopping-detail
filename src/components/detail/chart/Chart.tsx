import styled from 'styled-components';
import ChartDoughnut from './ChartDoughnut';
import ChartBar from './ChartBar';

const Chart = () => {
  return (
    <StyledWrap>
      <StyledContents>
        <StyledBar>
          <ChartBar />
        </StyledBar>
        <StyledDoughnut>
          <ChartDoughnut />
        </StyledDoughnut>
      </StyledContents>
    </StyledWrap>
  );
};

export default Chart;

const StyledWrap = styled.section`
  /* 임시값 */
  max-width: 1240px;
  margin: 0 auto;
`;

const StyledContents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
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
