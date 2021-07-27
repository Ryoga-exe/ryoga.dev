import React from 'react';

import Logo from '@components/atoms/logo';
import Arrow from '@components/molecules/arrow';
import styled from '@emotion/styled';
import Color from '@utils/color';

const Base = styled.div`
  position: relative;
  width: 100%;
  height: min(max(30vw, 70vh), 100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background-color: ${Color.bgAccent};
`;

const Hero: React.FC = () => {
  return (
    <Base>
      <Logo fill='white' isHero={true} />
      <Arrow href='#aboutMe' className='scroll'></Arrow>
    </Base>
  );
};

export default Hero;
