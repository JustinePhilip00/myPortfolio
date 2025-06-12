import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <div id="header" style={{ paddingTop: '64px', scrollMarginTop: '64px' }}>
        <Header />
      </div>
      <div id="skills" style={{ paddingTop: '64px', scrollMarginTop: '64px' }}>
        <Skills />
      </div>
      <div id="experience" style={{ paddingTop: '64px', scrollMarginTop: '64px' }}>
        <Experience />
      </div>
      <div id="projects" style={{ paddingTop: '64px', scrollMarginTop: '64px' }}>
        <Projects />
      </div>
      <div id="contact" style={{ paddingTop: '64px', scrollMarginTop: '64px' }}>
        <Contact />
      </div>
    </>
  );
}
