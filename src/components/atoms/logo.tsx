import React from 'react';

import styled from '@emotion/styled';
import { BreakPoint } from 'src/utils/breakPoint';

type LogoProps = {
  width?: string;
  minWidth?: string;
  fill?: string;
  isHero?: boolean;
};

const Base = styled.div<{
  width?: string;
  minWidth?: string;
  fill?: string;
  height: string;
  isHero: boolean;
}>`
  width: ${(props) => props.width || '12%'};
  min-width: ${(props) => props.minWidth || '270px'};
  fill: ${(props) => props.fill || 'black'};
  height: ${(props) => props.height};

  @media (${BreakPoint.CSS.sp}) {
    min-width: ${(props) => (props.isHero ? '230px' : props.minWidth || '270px')};
  }
`;

const Logo: React.FC<LogoProps> = ({ width, minWidth, fill, isHero = false }) => {
  const height = (9 / 59) * parseFloat(width || '270');
  return (
    <Base width={width} minWidth={minWidth} fill={fill} height={height + 'px'} isHero={isHero}>
      <svg viewBox='0 0 295 45'>
        <title>Ryoga.exe</title>
        <path d='M0 0v40h10V25h10v15h10V25h-5v-5h5V5h-5V0zm10 5h10v15H10zm25 10v15h5v5h15v5H40v5h20v-5h5V15H55v15H45V15zm40 0v5h-5v15h5v5h20v-5h5V20h-5v-5zm35 0v5h-5v10h5v5h15v5h-15v5h20v-5h5V15zm35 0v5h-5v15h5v5h15v-5h-10V20h10v15h5v5h10v-5h-5V15zm55 0v5h-5v15h5v5h25v-5h-20v-5h20V20h-5v-5zm30 0v5h5v5h5v5h-5v5h-5v5h15v-5h5v5h10v-5h-5v-5h-5v-5h5v-5h5v-5h-10v5h-10v-5zm40 0v5h-5v15h5v5h25v-5h-20v-5h20V20h-5v-5zM80 20h10v15H80zm35 0h10v10h-10zm90 0h10v5h-10zm70 0h10v5h-10zm-95 10v10h10V30z'></path>
      </svg>
    </Base>
  );
};

export default Logo;
