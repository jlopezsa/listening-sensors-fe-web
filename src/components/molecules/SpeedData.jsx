import { useSelector } from 'react-redux';

function SpeedData() {
  const speedTotal = useSelector((state) => state.speed);
  const { totalSpeed } = speedTotal;
  // console.log('VELOCIDAD: ', totalSpeed);
  return (
    <div>
      <h2>
        Velocidad total:
        {totalSpeed.toFixed(2)}
        m/s
      </h2>
    </div>
  );
}

export default SpeedData;
