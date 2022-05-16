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

export const options = {
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
      min: -2,
      max: 2,
    },
  },
};

const labels = [0, 1];

function AccelXYZGraphic(props) {
  const { xyzValues } = props;
  const { accelDataX, accelDataY, accelDataZ } = xyzValues;
  const data = {
    labels,
    datasets: [
      {
        label: 'x',
        data: [accelDataX, accelDataX],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'y',
        data: [accelDataY, accelDataY],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'z',
        data: [accelDataZ, accelDataZ],
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
        {accelDataX}
      </h3>
      <h3>
        y:
        {' '}
        {accelDataY}
      </h3>
      <h3>
        z:
        {' '}
        {accelDataZ}
      </h3>
      <Line options={options} data={data} />
    </div>

  );
}

AccelXYZGraphic.propTypes = {
  xyzValues: PropTypes.shape({
    accelDataX: PropTypes.number,
    accelDataY: PropTypes.number,
    accelDataZ: PropTypes.number,
  }).isRequired,
};

export default AccelXYZGraphic;
