import styled, { css } from 'styled-components';
import { colors } from '../../css/globalStyles';

import figuras1 from '../../figures/iot_figure_1.jpg';

const SlideWrapper = styled.div`
background-color: red;
position: relative;
width: 100vw;
height: auto;
`;

const ImageBox = styled.div`
background-color: ${colors.backgroundDark};
display: flex;
justify-content: center;

img {
  width: 100%;
  height: auto;
  background-color: rgba(136, 136, 136, 0.6);
}
`;

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 3px;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  width: 60px;
  height: 50px;

  ${({ position }) => position === 'left'
    && css`
      left: 10px;
    `}

  ${({ position }) => position === 'right'
    && css`
      right: 10px;
    `}
`;

function SlidesImage() {
  return (
    <SlideWrapper>
      <ImageBox>
        <img alt="" src={figuras1} />
        <NavButton position="left" />
        <NavButton position="right" />
      </ImageBox>
    </SlideWrapper>
    // <BigImage figuras={figuras1}>
    //   <BigImageBlur>
    //   </BigImageBlur>
    // </BigImage>
  );
}

export default SlidesImage;
