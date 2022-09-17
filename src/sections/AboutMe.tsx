import Heading from "@components/Heading";
import { MdPerson } from "react-icons/md";
import Image from "next/image";
import AboutMeImage from "@assets/about-me/gamer.png";
import { motion } from "framer-motion";
import { trpc } from '@utils/trpc';
import { fadeIn, popLeft } from "@/lib/animation";


const AboutMe: React.FC = () => {
  const { isError, isLoading, data } = trpc.useQuery(["data.section", {
    section: "about-me",
  }]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <section id="about-me">
      <div>
        <Heading icon={MdPerson} title="About Me" />
        <div className="grid lg:grid-cols-6 gap-12 items-center">
          <motion.div
            initial={'offscreen'}
            whileInView={'onscreen'}
            variants={popLeft}
            viewport={{ once: true }}
          >
            <div className="md:block lg:col-span-2 mx-auto">
              <Image src={AboutMeImage} alt={"about me image"} />
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={fadeIn}
            initial={'offscreen'}
            whileInView={'onscreen'}
            className="text-justify lg:col-span-4 wow fadeIn"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
