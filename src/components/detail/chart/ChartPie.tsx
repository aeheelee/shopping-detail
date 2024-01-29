import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { genderType } from '../../../types/CommonTypes';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  gender: genderType;
}

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '성별',
      font: {
        size: 25,
      },
    },
  },
};

const ChartPie = ({ gender }: IProps) => {
  const data = {
    labels: ['남성', '여성'],
    datasets: [
      {
        label: '성별 구매 통계 그래프',
        data: Object.values(gender),
        backgroundColor: ['rgba(0, 4, 251, 1)', '#ec7a45'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 3,
      },
    ],
  };
  return <Pie options={options} data={data} />;
};

export default ChartPie;
