import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import Typist from 'react-typist';

import Main from '../layouts/Main';

// const doc = '<?php';
// const sec = 'function show_love() {';
// const thi = 'echo "LOVE";';
// const fort = '}';
// const fiv = '?>';
const line = '/* write, compile, run, repeat */';

const Index = () => (
  <Main
    description={"Padmalochan Sahoo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h1>I&apos;m A
          </h1>
          <h2>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'creative',
                1000,
                'innovative',
                1000,
                'Enthused',
                1000,
                'and a hardworking engineer.',
                1000,
                'HIRE ME.',
                1000,
              ]}
            />
          </h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <div
        style={{
          backgroundColor: 'black',
          width: 'absolute',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            margin: '100px',
            color: '#E4EEEE',
            fontSize: '20px',
          }}
        >
          <Typist>
            {/* {doc}<br />
            {sec}<br />
            {thi}<br />
            {fort}<br />
            {fiv} */}
            {line}
          </Typist>
        </p>
      </div>
    </article>
  </Main>
);

export default Index;
