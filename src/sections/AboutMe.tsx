import Heading from "../components/Heading";
import { MdPerson } from "react-icons/md";
import Image from "next/image";
import AboutMeImage from "../assets/about-me/gamer.png";
import {motion} from "framer-motion";

const AboutMe = () => {

  return (
    <section id="about-me">
      <Heading icon={MdPerson} title="About Me" />

      <div className="grid lg:grid-cols-6 gap-12 items-center">
        {/* <motion.div

          initial={{opacity: 0, scale: .4}}
          whileInView={{opacity: "1"}}
          viewport={{once: true}} */}
        {/* > */}
          <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto duration-200 fadeInLeft">
            <Image src={AboutMeImage} />
          </div>
        {/* </motion.div> */}
        {/* <div
          className="text-justify lg:col-span-4 wow fadeIn"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        /> */}
      </div>
    </section>
  );
};

export default AboutMe;