import React from 'react';

import Container from '@components/atoms/container';
import Heading from '@components/atoms/heading';
import { ButtonDetail, ButtonWrapper } from '@components/molecules/button';

import styled from '@emotion/styled';

const Styled = {
  RecentPost: styled.div`
    color: #737373;
    font-size: 0.96rem;
    p {
      display: inline-block;
      text-decoration: none;
      color: #27456C;
    }
    li {
      padding: 0.5rem 0;
      border-top: 2px solid #efefef;
      > span {
        margin-right: 0.9rem;
        font-size: 0.85rem;
      }
    }
    li:last-child {
      border-bottom: 2px solid #efefef;
      margin-bottom: 10px;
    }
  `,
};

const Content: React.FC = () => (
  <section id='achievements'>
    <Container padding='100px 4vw'>
      <Heading.H3>Achievements</Heading.H3>
      <Styled.RecentPost>
          <ul className='alt'>
            <li>
              <span>2022</span>
              <p>AtCoder Heuristic 水コーダー達成</p>
            </li>
            <li>
              <span>2022</span>
              <p>情報科学の達人2022年度受講生に採択</p>
            </li>
            <li>
              <span>2022</span>
              <p>JOI 2021/2022 本選出場・本選Bランク</p>
            </li>
            <li>
              <span>2021</span>
              <p>AtCoder Algorithm 水コーダー達成</p>
            </li>
            <li>
              <span>2021</span>
              <p>令和3年度 秋期 応用情報技術者試験合格</p>
            </li>
          </ul>
        </Styled.RecentPost>
      <ButtonWrapper>
        <ButtonDetail to='/about#Achievements'>Achievements</ButtonDetail>
      </ButtonWrapper>
    </Container>
  </section>
);

export default Content;
