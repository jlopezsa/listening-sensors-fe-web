import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import iconDefault from '../../figures/network_default.svg';
import { colors } from '../../css/globalStyles';

const ImagIcon = styled(SVG)`
  height: 30px;
  width: 30px;
  background-repeat: no-repeat;
  background-size: 100px 100px;
  margin-right: 10px;
  margin-left: 10px;
  & path {
    fill: ${colors.backgroundLight};
  }
`;

function IconSocialNetworks({ imageSocial }) {
  return (
    <ImagIcon src={!imageSocial ? iconDefault : imageSocial} alt="title" />
  );
}

IconSocialNetworks.propTypes = {
  // eslint-disable-next-line react/require-default-props
  imageSocial: PropTypes.string,
};

export default IconSocialNetworks;
