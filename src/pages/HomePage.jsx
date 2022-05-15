/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { dbRT } from '../utils/firebase';
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
  Legend
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
    }
  }
};

const labels = [0, 5];



function HomePage() {
  const [accelDataX, setAccelDataX] = useState(0);
  const [accelDataY, setAccelDataY] = useState(0);
  const [accelDataZ, setAccelDataZ] = useState(0);
  const starCountRef = ref(dbRT, 'accelerometer/');

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setAccelDataX(data.x);
      setAccelDataY(data.y);
      setAccelDataZ(data.z);
    });
  });

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
      <h1>HomePage</h1>
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

export default HomePage;
