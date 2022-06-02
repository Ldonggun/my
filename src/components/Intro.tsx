import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Intro = () => {
  const [textCount, setTextCount] = useState(0);

  const convertedText = [
    `부족한 부분은 채워가며, 아쉬운 부분은 다듬어가는 `,
    '노력과 결과를 보여줄 수있는 ',
    '더 좋은 코드에 대해 고민하는 ',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextCount(count => (count + 1) % convertedText.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <IntroContainer>
        <h3>
          안녕하세요. 프론트 엔드 개발자 임동건입니다.
          {convertedText.map((text, index) => (
            <ConvertedText
              state={index === textCount ? 'active' : 'hide'}
              key={index}
            >
              {text}
            </ConvertedText>
          ))}
          &nbsp;개발자가 되겠습니다.
        </h3>
      </IntroContainer>
    </>
  );
};

export default Intro;

const IntroContainer = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    white-space: pre-line;
    font-family: NotoSansKR-Regular;
    text-align: center;
    font-size: 2.4rem;
  }

  .scroll {
    font-size: 1.4rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fadein 3s;
  }
`;

const ConvertedText = styled.h3<{ state: string }>`
  font-family: NotoSansKR-Regular;
  text-align: center;
  font-size: 2.4rem;
  animation: fadein 5s ease-in-out;

  ${props =>
    props.state === 'active'
      ? css`
          display: inline-block;
          @keyframes fadein{
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: none;
            }
        `
      : css`
          display: none;
        `}}
`;