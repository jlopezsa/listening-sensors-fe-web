/* eslint-disable */
// https://nazifbara.com/blog/how-to-make-a-slideshow-gallery-with-reactjs-and-styled-components
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../css/globalStyles';

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

function SlidesImage(props) {
  const [{ items, activeIndex }, setState] = useState({
    items: props.items,
    activeIndex: 0
  });

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      setState((s) => ({ ...s, activeIndex: items.length - 1 }));
      return;
    }
    if (newIndex === items.length) {
      setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }
    setState((s) => ({ ...s, activeIndex: newIndex }));
  };

  return (
    <SlideWrapper>
      <ImageBox>
        <img alt="" src={items[activeIndex].caption} src={items[activeIndex].image} />
        <NavButton position="left" onClick={moveTo(activeIndex - 1)}/>
        <NavButton position="right" onClick={moveTo(activeIndex + 1)}/>
      </ImageBox>
    </SlideWrapper>
  );
}

export default SlidesImage;
