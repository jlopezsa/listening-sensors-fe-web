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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LineGraphic, ContainerLine } from '../atomns/LineGraphic';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
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
      text: 'Magnetometer',
    },
  },
  scales: {
    yAxis: {},
  },
};

const historyX = [];
const historyY = [];
const historyZ = [];
const labels = [];

function XYZgraphicHistoryMagnetometer() {
  const xyzValues = useSelector((state) => (state.dataMagnetometer));
  const { dataX, dataY, dataZ } = xyzValues;
  useEffect(() => {
    if (historyX.length >= 50) {
      historyX.shift();
      historyY.shift();
      historyZ.shift();
      labels.shift();
    }
    historyX.push(dataX);
    historyY.push(dataY);
    historyZ.push(dataZ);
    const tiempo = new Date(xyzValues.createTime.seconds * 1000);
    const millisec = xyzValues.createTime.nanoseconds / 1000;
    const timeSeconds = tiempo.getSeconds() + (millisec / 1000000);
    labels.push(timeSeconds.toFixed(2));
  });

  useEffect(() => () => {
    historyX.splice(0, 50);
    historyY.splice(0, 50);
    historyZ.splice(0, 50);
    labels.splice(0, 50);
  }, []);

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
        borderCapStyle: 'butt',
        drawOnChartArea: false,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
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
        borderCapStyle: 'butt',
        drawOnChartArea: false,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
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
        borderCapStyle: 'butt',
        drawOnChartArea: false,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <ContainerLine>
      <LineGraphic options={options} data={data} width={10} height={5} />
    </ContainerLine>

  );
}

export default XYZgraphicHistoryMagnetometer;
