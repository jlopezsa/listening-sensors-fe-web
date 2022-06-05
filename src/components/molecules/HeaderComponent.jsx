import styled from 'styled-components';
import LogoSensor from '../atomns/LogoSensor';
import Menu from '../atomns/Menu';
import { colors } from '../../css/globalStyles';

export const Header = styled.header`
  background-color: ${colors.backgroundDark};
  display: flex;
  flex-direction: row;
  height: 90px;
  position: relative;
  width: 100vw;
  z-index: 999;
  align-items: center;
  justify-content: space-between;
  position: fixed; // Set the navbar to fixed position
`;

function HeaderComponent() {
  return (
    <Header>
      <LogoSensor />
      <Menu />
    </Header>
  );
}

export default HeaderComponent;
