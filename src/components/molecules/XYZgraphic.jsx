import PropTypes from 'prop-types';

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
import { Line } from 'react-chartjs-2';

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
      text: 'Accelerometer',
    },
  },
  scales: {
    xAxis: {
      min: 0,
      max: 1,
    },
    yAxis: {
      min: -1.5,
      max: 1.5,
    },
  },
};

const labels = [0, 1];

function XYZgraphic(props) {
  const { xyzValues } = props;
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
    <div>
      <h3>
        x:
        {' '}
        {dataX}
      </h3>
      <h3>
        y:
        {' '}
        {dataY}
      </h3>
      <h3>
        z:
        {' '}
        {dataZ}
      </h3>
      <div>
        <Line options={options} data={data} />
      </div>
    </div>

  );
}

XYZgraphic.propTypes = {
  xyzValues: PropTypes.shape({
    dataX: PropTypes.number,
    dataY: PropTypes.number,
    dataZ: PropTypes.number,
  }).isRequired,
};

export default XYZgraphic;
