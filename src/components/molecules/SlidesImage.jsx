/* eslint-disable */
// https://nazifbara.com/blog/how-to-make-a-slideshow-gallery-with-reactjs-and-styled-components
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../css/globalStyles';

const SlideWrapper = styled.div`
width:70%;
height: auto;
display: flex;
justify-content: center;
`;

const ImageBox = styled.div`
background-color: ${colors.backgroundDark};
display: flex;
justify-content: center;

img {
  width: 100%;
  height: auto;
  border-radius: 30% 10%;
  box-shadow: 10px 5px 5px ${colors.backgroundOrange};
}
`;

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 5px;
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
