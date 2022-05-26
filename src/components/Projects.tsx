import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProjectItem } from './index';
import rightArrow from '../assets/image/rightArrow.png';
import leftArrow from '../assets/image/leftArrow.png';
import {
  main,
  userpage,
  loginUserPage,
  profile,
  compatibility,
  compatibility2,
  chat1,
  chat2,
  chat3,
} from '../assets/image/fungap';
import { detail, post } from '../assets/image/lost99';
import { login, signup } from '../assets/image/velog';

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ProjectNextArrow />,
    prevArrow: <ProjectPrevArrow />,
  };

  const data = [
    {
      id: 1,
      title: 'Fungap',
      explain:
        '항해99 부트 캠프 기간 중 가장 길었으며 백엔드 3명, 프론트 엔드 3명 총 6명의 팀원과 함께 6주간 진행한 프로젝트 입니다. 항해 기간 동안 배운 React를 이용하여 시도 해보고 싶었던 것들을 해볼 수 있었던 기회였습니다.                                              MBTI 와 관련된 다양한 재미있는 컨텐츠를 제공하는 서비스이며, MBTI 유형별로 재미있는 게시물과 테스트 그리고 채팅 서비스를 제공 했습니다.',
      tech: 'React.js, redux, immer, react-router-dom, postcss, axios, socket.io',
      service:
        'socket.io 를 통한 채팅구현, 소셜 회원가입, MBTI궁합테스트, 유저 페이지 구현',
      deployment: 'aws-s3',
      url: 'https://fungap.shop',
      youtubeUrl: 'https://youtu.be/EUYZv5PJMtI',
      githubUrl: 'https://github.com/Ldonggun/fungap-front',
      imageUrl: [
        main,
        userpage,
        loginUserPage,
        profile,
        compatibility,
        compatibility2,
        chat1,
        chat2,
        chat3,
      ],
    },
    {
      id: 2,
      title: 'VELOG clon coding',
      explain:
        '1주일간 프론트엔드 2명, 백엔드 3명과 함께 진행한 클론 코딩 프로젝트 입니다. JWT방식을 이용한 로그인 회원가입 구현 부분을 맡으며 공부 해볼 수있는 시간이었습니다. 유저페이지 제작을 맡으며 React숙련도 또한 올릴 수 있었습니다.',
      tech: 'React.js, redux, redux-actions, redux-thunk, redux-logger, immer, react-router-dom, styled-components, axios, JWT',
      service: 'JWT를 이용한 회원가입, 게시물 CRUD 및 유저 페이지',
      deployment: 'aws-s3',
      url: 'false',
      youtubeUrl: '',
      githubUrl: 'https://github.com/Ldonggun/velog-clone',
      imageUrl: [login, signup],
    },
    {
      id: 3,
      title: 'LOST99',
      explain:
        '2주간 React를 배운후 처음으로 다른 개발자들과 함께 프로젝트를 진행한 프로젝트 입니다. 잃어버린 물건을 찾을 수 있게 게시물을 올리고 댓글로 소통 하게 해주는 간단한 서비스를 구현했습니다. 첫 프로젝트로 백엔드 개발자와 호흡을 맞추며 서버통신을 해볼 수 있었으며,게시글 작성시 이미지 업로드 구현으로 S3를 이용해볼 기회가 있었습니다. React 를 이용한 기본적인 게시글 CRUD구현을 해볼수 있었습니다.',
      tech: 'React.js, redux, styled-components, axios',
      service: ' 게시물CRUD, s3 이용한 이미지저장',
      deployment: 'aws-s3',
      url: 'false',
      youtubeUrl: '',
      githubUrl: 'https://github.com/Ldonggun/lost99-frontend',
      imageUrl: [detail, post],
    },
  ];
  return (
    <ProjectsContainer className='projects'>
      <StyledSlider {...settings}>
        {data.map(data => (
          <ProjectItem data={data} key={data.id} />
        ))}
      </StyledSlider>
    </ProjectsContainer>
  );
};

export default Projects;

function ProjectNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'white',
        backgroundImage: `url(${rightArrow})`,
        width: '45px',
        height: '45px',
        right: '-65px',
      }}
      onClick={() => {
        onClick();
        console.log('projectSlider');
      }}
    />
  );
}

function ProjectPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        backgroundImage: `url(${leftArrow})`,
        width: '45px',
        height: '45px',
        left: '-65px',
      }}
      onClick={() => {
        onClick();
        console.log('projectSlider');
      }}
    />
  );
}

const ProjectsContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 64px;
`;

const StyledSlider = styled(Slider)`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 12px;

  .slick-prev:before {
    display: none;
  }
  .slick-next:before {
    display: none;
  }
`;