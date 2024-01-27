import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
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

const ChartDoughnut = ({ gender }: IProps) => {
  const data = {
    labels: ['남성', '여성'],
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(gender),
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
};

export default ChartDoughnut;
