import React from 'react';
import { SiJest, SiRedux, SiDocker, SiTestinglibrary } from 'react-icons/si';
import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { GrMysql, GrNode } from 'react-icons/gr';
import Header from './Header';
import abstractShape from '../images/abstract-design.png';
import barbaraPicture from '../images/foto.png';
import ImagesDetails from './ImagesDetails';
import '../css/Home.css';

function Home() {
  return (
    <section className="home-page">
      <Header />
      <ImagesDetails />
      <div className="home-section">
        <section className="home-title">
          <h1>Bárbara Rocha</h1>
          <h4>Developer</h4>
          <p className="about-me">
            Oii, eu sou a Bárbara!
            Estou em transição de carreira para a área de tecnologia,
            estudo Desenvolvimento Web na Trybe. Meu objetivo é sempre aprender e me
            aprimorar cada vez mais nos conhecimentos de desenvolvimento de software e design.
          </p>
          <div className="icons">
            <SiJest className="icon" />
            <AiOutlineHtml5 className="icon" />
            <DiCss3Full className="icon" />
            <FaReact className="icon" />
            <SiRedux className="icon" />
            <GrMysql className="icon" />
            <SiDocker className="icon" />
            <FaGitAlt className="icon" />
            <AiOutlineGithub className="icon" />
            <SiTestinglibrary className="icon" />
            <GrNode className="icon" />
          </div>
        </section>
        <aside className="home-img">
          <img className="shape-pic" src={abstractShape} alt="abstract-shape" />
          <img className="barbara-picture" src={barbaraPicture} alt="barbara-pic" />
        </aside>
      </div>
    </section>
  );
}

export default Home;
