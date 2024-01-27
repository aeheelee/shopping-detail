import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { AgeType } from '../../../types/CommonTypes';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IProps {
  age: AgeType;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '연령',
      font: {
        size: 25,
      },
    },
  },
};

const ChartBar = ({ age }: IProps) => {
  const labels = ['~18세', '19~28세', '29~38세', '39~48세', '49세~'];

  const data = {
    labels,
    datasets: [
      {
        labels: '라벨입니다',
        data: Object.values(age),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartBar;
