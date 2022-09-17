import type { NextPage } from "next";
import Head from "next/head";

import Wrapper from "@components/Wrapper";

import Education from "@sections/Education";
import Skills from "@sections/Skills";
import Work from "@sections/Work";
import AboutMe from "@sections/AboutMe";
import Hero from "@sections/Hero";

const Home: NextPage = () => {
  
  return (
    <>
      <Head key={'head'}>
        <title>Yoni Hodefi</title>
        <meta name="description" content="Yoni hodefi place on the net" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
      </Head>,

      <Wrapper key={'wrapper'}>
        <main>
          <Hero />
          <AboutMe />
          <section>
            <Work/>
            <Education/>
          </section>
          <Skills/>
        </main>
      </Wrapper>
    </>
  );
};

export default Home;
