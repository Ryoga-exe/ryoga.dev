import React from 'react';

import styled from '@emotion/styled';

const BgCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -32;
`;

export const BG: React.FC = () => <BgCanvas id='bg-canvas' />;
// ToDo: canvasのwidthとheightを最大にする

export default BG;
