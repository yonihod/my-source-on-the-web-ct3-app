import Heading from "@components/Heading";
import { GoTools } from "react-icons/go";
import data from "@data/skills.json";
import { skills } from "@components/Images";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";

const Skills = () => {
  return (
    <section id="skills">
      <div>
        <Heading icon={GoTools} title="Skills" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map(({ icon, name, tech }, index) => (
            <motion.div
              viewport={{ once: true, amount: 0.8 }}
              key={`skill-${index}`}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}

            >
              <div className="flex items-center gap-3">

                <Image className="w-10 h-10 mr-5" width={25} height={25} src={skills[icon as keyof typeof skills]} />
                <div>
                  <h6 className="font-semibold leading-none">
                    {name}
                  </h6>
                  <h6
                    className="mt-2 leading-none text-xs"
                  >
                    ({tech})
                  </h6>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
