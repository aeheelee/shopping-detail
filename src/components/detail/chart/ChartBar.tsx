import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { AgeType } from '../../../types/CommonTypes';
import { useCategories } from '../../../hooks/api/useCategories';

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
  const { categoryData } = useCategories();

  if (!categoryData) return null;

  // NOTE: categoryData에 detail의 purchaseStatus.age 맵핑하여 새로운 배열 만들기
  const ageData = categoryData.ageType.map((item) => ({
    ...item,
    value: age[item.type],
  }));

  const ageValues = ageData.map((item) => item.value);
  const chartLabels = ageData.map((item) => item.description);
  const chartMaxValue = Math.max(...ageValues);
  const maxBgColor = ageValues.map((item) => (item === chartMaxValue ? 'blue' : 'rgba(255, 99, 132, 0.5)'));

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: '구매율(%)',
        data: ageValues,
        backgroundColor: maxBgColor,
      },
    ],
  };

  return <Bar height={300} options={options} data={data} />;
};

export default ChartBar;
