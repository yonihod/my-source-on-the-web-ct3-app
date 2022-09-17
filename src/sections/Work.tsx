import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Heading from "../components/Heading";
import { MdLocationOn, MdMoreHoriz, MdWork } from "react-icons/md";
import data from "@data/work.json";
import Image from "next/image";
import { work } from "@components/Images";
import { motion } from "framer-motion";
import { popLeft } from "@/lib/animation";

const Work = () => {

    const [max, setMax] = useState(2);

    return (
        <section id="work">
            <motion.div
                variants={popLeft}
                initial={'offscreen'}
                whileInView={'onscreen'}
            >
                <Heading icon={MdWork} title="Work" />

                <div className="flex">
                    <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
                    <div className="-ml-2">
                        {data.map(({ icon, title, subtitle, period, location, specialization }, index) => {
                            if (index >= max) return null;

                            return (
                                <div
                                    key={`work-${index}`}
                                    className="py-4 flex wow fadeInDown"
                                    style={{
                                        animationDuration: `${index * 200 + 500}ms`,
                                    }}
                                >
                                    <div
                                        className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 
                  } duration-200`}
                                        data-tip={`(${period})`}
                                        data-place="left"
                                    />
                                    <div className="ml-8">
                                        <div className="mr-auto text-left">
                                            <Image
                                                width={100}
                                                height={40}
                                                alt={"work icon"}
                                                src={work[icon as keyof typeof work]}
                                            />
                                        </div>
                                        <div className="mt-3 flex items-baseline">
                                            <h6 className="font-semibold">{title}</h6>
                                            <h6 className="text-xs ml-2">({period})</h6>
                                        </div>
                                        <h6 className="text-sm">{subtitle}</h6>
                                        <div className="mt-2 flex items-center">
                                            <MdLocationOn size="0.75rem" />
                                            <h6 className="font-semibold text-xs ml-2">
                                                {location}
                                            </h6>
                                        </div>
                                        <h6 className="text-xs mt-2">
                                            <strong>Specialized in:</strong> {specialization}
                                        </h6>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {max <= 2 && (
                    <div className="ml-12 mt-4 rounded-lg py-2 flex">
                        <div
                            className="px-4"
                            data-tip="Load More"
                            data-place="right"
                            onClick={() => {
                                setMax(6);
                                ReactTooltip.rebuild();
                                ReactTooltip.hide();
                            }}
                        >
                            <MdMoreHoriz size="1.5rem" />
                        </div>
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default Work;