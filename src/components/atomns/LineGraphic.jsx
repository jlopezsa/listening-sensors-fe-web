import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

export const LineGraphic = styled(Line)`
width: 800px;
height: 400px;
@media (min-width: 481px) and (max-width: 767px) {
  width: 482px;
  height: 300px;
}
@media (min-width: 320px) and (max-width: 480px) {
  width: 320px;
  height: 300px;
}
`;

export const ContainerLine = styled.div`
width: 800px;
height: 400px;
@media (min-width: 481px) and (max-width: 767px) {
  width: 482px;
  height: 300px;
}
@media (min-width: 320px) and (max-width: 480px) {
  width: 320px;
  height: 300px;
}
`;
