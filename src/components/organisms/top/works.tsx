import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Slider, { Settings } from 'react-slick';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';
import { css } from '@emotion/react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Content: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section id='works'>
      <Container padding='100px 4vw'>
        <Heading.H3>Works</Heading.H3>
        <div
          css={css`
            text-align: center;
          `}
        >
          <Slider {...settings}>
            <div>
              <StaticImage
                src='https://raw.githubusercontent.com/Ryoga-exe/Tetris-Typing/master/screen%20shots/screenshot_0.png'
                alt='screenshot'
                placeholder='blurred'
                layout='constrained'
                height={300}
                css={css`
                  border: 3px solid rgba(0, 0, 0, 0.7);
                  margin-bottom: 2em;
                `}
              />
              <h3>Tetris Typing</h3>
            </div>
            <div>
              <StaticImage
                src='https://raw.githubusercontent.com/Ryoga-exe/Console-Tetris/master/screenshots/screenshot.png'
                alt='screenshot'
                placeholder='blurred'
                layout='constrained'
                height={300}
                css={css`
                  border: 3px solid rgba(0, 0, 0, 0.7);
                  margin-bottom: 2em;
                `}
              />
              <h3>Console Tetris</h3>
            </div>
            <div>
              <h3>Sigmabeat</h3>
            </div>
          </Slider>
        </div>
        <br />
        <ButtonWrapper>
          <ButtonDetail to='/works'>Works</ButtonDetail>
        </ButtonWrapper>
      </Container>
    </section>
  );
};

export default Content;
