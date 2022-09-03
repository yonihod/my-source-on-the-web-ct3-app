import type { NextPage } from "next";

import Head from "next/head";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Hero from "../sections/Hero";
import { trpc } from "../utils/trpc";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Wrapper>
      <main>
        <Hero/>
        <AboutMe/>
      </main>  
    </Wrapper>
  );
};

export default Home;
