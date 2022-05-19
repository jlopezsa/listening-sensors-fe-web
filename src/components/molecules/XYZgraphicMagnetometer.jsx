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
      text: 'Manetometer',
    },
  },
  scales: {
    yAxis: {
      min: -50,
      max: 50,
    },
  },
};

const labels = [0.000, 1.001];
// const labels = labelsInt.toFixed(2);

function XYZgraphicMagnetometer() {
  const xyzValues = useSelector((state) => (state.dataMagnetometer));
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

export default XYZgraphicMagnetometer;
