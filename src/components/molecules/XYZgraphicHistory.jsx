/* eslint-disable */
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
import { useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
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
    yAxis: {
      min: -2,
      max: 2,
    },
  },
};

const historyX = [];
const historyY = [];
const historyZ = [];
const labels = [];

function XYZgraphicHistory(props) {
  const { xyzValues } = props;
  const { dataX, dataY, dataZ } = xyzValues;
  // console.log('PROPS: ', xyzValues.createTime.seconds);

  useEffect(() => {
    if( historyX.length >= 100 ){
      historyX.shift();
      historyY.shift();
      historyZ.shift();
      labels.shift();
    }

    historyX.push(dataX);
    historyY.push(dataY);
    historyZ.push(dataZ);
    labels.push(xyzValues.createTime.nanoseconds);
  })

  const data = {
    labels,
    datasets: [
      {
        label: 'x',
        data: historyX,
        fill: true,
        lineTension: 0.5,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderCapStyle: "butt",
        drawOnChartArea: false,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: 'y',
        data: historyY,
        lineTension: 0.5,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderCapStyle: "butt",
        drawOnChartArea: false,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: 'z',
        data: historyZ,
        lineTension: 0.5,
        borderColor: 'rgb(53, 162, 2)',
        backgroundColor: 'rgba(53, 162, 235, 0.1)',
        borderCapStyle: "butt",
        drawOnChartArea: false,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <div>
      <div>
        <Line options={options} data={data} />
      </div>
    </div>

  );
}

// XYZgraphicHistory.propTypes = {
//   xyzValues: PropTypes.shape({
//     createTime: PropTypes.shape({
//       seconds: PropTypes.number,
//     }).isRequired,
//     dataX: PropTypes.number,
//     dataY: PropTypes.number,
//     dataZ: PropTypes.number,
//   }).isRequired,
// };

export default XYZgraphicHistory;
