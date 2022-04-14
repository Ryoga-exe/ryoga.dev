import React from 'react';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';
import { Card, CardFlame } from '@components/molecules/card';
import { css } from '@emotion/react';
import { faCode, faSkiing, faTools } from '@fortawesome/free-solid-svg-icons';

const Content: React.FC = () => (
  <section
    id='skills'
    css={css`
      background-color: #f7fafc;
    `}
  >
    <Container padding='100px 4vw'>
      <Heading.H3>Skills</Heading.H3>
      <CardFlame size={{ pc: '33.33333%', tb: '50%', sp: '100%' }}>
        <Card title='Programming' icon={faCode} size='3.0rem'>
          プログラミングがある程度できます。Web系はフロントエンドからバックエンドまで全て好きです。
          ゲームプログラミングもしており、OpenSiv3Dというライブラリに貢献した経験があります。
          また、競技プログラミングもしていて、AtCoderのコンテストにほぼ毎週参加しています。 レートは1200を突破し水コーダーです！
        </Card>
        <Card title='Creating &amp; Design' icon={faTools} size='3.0rem'>
          ものづくりやデザインが得意です。このサイトをデザインも込みで作れる程度の能力はあります。
          また、電子工作などもしており、自作ゲームのハードウェアの作成などをしています。
          自作PCをしたり、折り紙をしたり、編み物をしたりなど創作活動が大好きです。
        </Card>
        <Card title='Skiing' icon={faSkiing} size='3.0rem'>
          スキーを3歳の頃からしていて今もなお得意です。 全日本スキー連盟のスキーバッジテストの1級に小学生で合格した実績があります。
          また、競技スキーもやっています。全国中学校スキー大会やインターハイに出場した経験があります。
        </Card>
      </CardFlame>
      <br />
      <ButtonWrapper>
        <ButtonDetail to='/about#skills'>Skills</ButtonDetail>
        <ButtonDetail to='https://www.resume.id/ryoga_exe'>See my resume</ButtonDetail>
      </ButtonWrapper>
    </Container>
  </section>
);

export default Content;
