import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import logoSensor from '../../figures/icon_sensor.svg';

const ImagSmall = styled(SVG)`
  height: 90px;
  width: 90px;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: center;
  margin-right: 50px;
  margin-left: 50px;
  & path {
    fill: orange;
  }
`;

function LogoSensor() {
  return (
    <div>
      <ImagSmall src={logoSensor} alt="title" />
    </div>
  );
}

export default LogoSensor;
