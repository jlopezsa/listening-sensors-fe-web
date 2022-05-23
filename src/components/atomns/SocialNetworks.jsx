import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import iconDefault from '../../figures/network_default.svg';
import { colors } from '../../css/globalStyles';

const ContainerSocialNetwork = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;
const ImagIcon = styled(SVG)`
  height: 30px;
  width: 30px;
  background-repeat: no-repeat;
  background-size: 100px 100px;
  margin-right: 20px;
  margin-left: 20px;
  & path {
    fill: ${colors.backgroundLight};
  }
`;

function SocialNetworks({ imageSocial }) {
  return (
    <ContainerSocialNetwork>
      <ImagIcon src={!imageSocial ? iconDefault : imageSocial} alt="title" />
      <h3>Facebook</h3>
    </ContainerSocialNetwork>
  );
}

SocialNetworks.propTypes = {
  // eslint-disable-next-line react/require-default-props
  imageSocial: PropTypes.string,
};

export default SocialNetworks;
