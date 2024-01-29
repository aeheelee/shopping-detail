import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { AgeType } from '../../../types/CommonTypes';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IProps {
  age: AgeType;
}

const options = {
  responsive: true,
  scale: {
    y: {
      beginAtZero: true,
      max: 100,
      stepSize: 10,
    },
  },
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

  const maxIndex = Object.values(age).indexOf(Math.max(...Object.values(age)));
  const bgColors = Array(labels.length).fill('#666464');
  bgColors[maxIndex] = '#2f00ff';

  const data = {
    labels,
    datasets: [
      {
        labels: '연령별 구매 통계 그래프',
        data: Object.values(age),
        backgroundColor: bgColors,
      },
    ],
  };

  return <Bar height={300} options={options} data={data} />;
};

export default ChartBar;
