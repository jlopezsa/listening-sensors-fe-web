/* eslint-disable */
// https://nazifbara.com/blog/how-to-make-a-slideshow-gallery-with-reactjs-and-styled-components
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../css/globalStyles';
import leftArrow from '../../figures/left_arrow_nav_icon.svg';
import rightArrow from '../../figures/right_arrow_nav_icon.svg';
import prenchArray from '../atomns/DataFigures';

const SlideWrapper = styled.div`
width:80%;
height: auto;
display: inline-flex;
justify-content: center;
align-items: center;
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
  padding: 0px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  width: 80px;
  height: auto;

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
  const [{ items, activeIndex }, setState] = useState({
      items: [
        {
          caption: '',
          image: '',
        }
      ],
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

  async function getArray() {
    const teste = await prenchArray();
    setState({
      items: teste,
      activeIndex: 0
    });
  }

  useEffect( () => {
    getArray();
  }, []);

  return (
    <SlideWrapper>
        <NavButton onClick={moveTo(activeIndex - 1)}>
          <img src={leftArrow}/>
        </NavButton>
      <ImageBox>
        <img alt="" src={items[activeIndex].caption} src={items[activeIndex].image} />
      </ImageBox>
        <NavButton  onClick={moveTo(activeIndex + 1)}>
          <img src={rightArrow}/>
        </NavButton>
    </SlideWrapper>
  );
}

export default SlidesImage;
