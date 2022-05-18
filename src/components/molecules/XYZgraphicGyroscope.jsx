import { useSelector } from 'react-redux';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import { Line } from 'react-chartjs-2';
import { LineGraphic, ContainerLine } from '../atomns/LineGraphic';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gyroscope',
    },
  },
  scales: {
    yAxis: {
      min: -5,
      max: 5,
    },
  },
};

const labels = [0.000, 1.001];
// const labels = labelsInt.toFixed(2);

function XYZgraphicGyroscope() {
  const xyzValues = useSelector((state) => (state.dataGyroscope));
  const { dataX, dataY, dataZ } = xyzValues;
  const data = {
    labels,
    datasets: [
      {
        label: 'x',
        data: [dataX, dataX],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'y',
        data: [dataY, dataY],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'z',
        data: [dataZ, dataZ],
        borderColor: 'rgb(53, 162, 2)',
        backgroundColor: 'rgba(53, 162, 235, 0.1)',
      },
    ],
  };
  return (
    <ContainerLine>
      <LineGraphic options={options} data={data} width={10} height={5} />
    </ContainerLine>
  );
}

export default XYZgraphicGyroscope;
