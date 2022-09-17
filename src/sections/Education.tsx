import Heading from "@components/Heading";
import { MdSchool } from "react-icons/md";
import education from "@data/education.json";
import Image from "next/image";
import { education as educationImages } from "@components/Images";
import { popRight } from "@lib/animation";
import { motion } from "framer-motion";

const Education = () => {

  return (
    <section id="education">
      <div>
        <motion.div
          variants={popRight}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true }}
        >
          <Heading icon={MdSchool} title="Education" />
          <div className="flex">
            <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
            <div className="-ml-2">
              {education.map(({ icon, title, subtitle, period }, index) => {
                return (
                  <div
                    key={`education-${index}`}
                    className="py-4 flex wow fadeInDown"
                  >
                    <div
                      className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2
                  } duration-200`}
                      data-tip={`(${period})`}
                      data-place="left"
                    />
                    <div className="ml-8">
                      <Image
                        height={32}
                        width={32}
                        src={educationImages[icon as keyof typeof educationImages]}
                      />
                      <h6 className="mt-3 font-semibold">{title}</h6>
                      <h6 className="text-sm">{subtitle}</h6>
                      <h6 className="mt-2 text-xs">({period})</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;