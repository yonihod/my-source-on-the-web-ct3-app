import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";
import HeroImage from "@assets/yoni_work_2.png";
import HeroLogo from "@assets/yoni_logo_1.png";
import Image from 'next/image';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const parallax = useRef<Parallax | null>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);
    const [showSocial, setShowSocial] = useState(false);
    const controls = useAnimation();


    setTimeout(()=>{
        setShowSocial(true);
    },7000)

    useEffect(() => {
        if (parallaxRef.current) {
            parallax.current = new Parallax(parallaxRef.current!, {
                invertX: false,
                invertY: false,
            })
        }
        return () => {
            parallax && parallax.current?.destroy();
        };
    }, [parallaxRef.current]);

    return (
        <section id="hero" className="min-h-screen flex items-center container">
            <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
                <div ref={parallaxRef} className="col-span-2">
                    <motion.div
                        animate={{ opacity: 1, scale: 1, transition: { duration: .6} }}
                        initial={{opacity: 0, scale: .4}}
                        className="square"
                    >
                        <div className="max-w-lg mx-auto" data-depth="0.4">
                            <Image src={HeroImage} alt="Yoni" width={600} height={550} />
                        </div>
                    </motion.div>
                </div>
                <div className="col-span-3">

                    <Image
                        className="max-w-lg max-h-32 mx-auto lg:mx-0"
                        src={HeroLogo}
                    />


                    <h1 className="sr-only">
                        Yoni Hodeffi&apos;s Resume <br />
                        Developer, Gamer, from Petach Tikva, Israel
                    </h1>

                    <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start h-48">
                        <Subtitle />
                        {showSocial &&
                        <div className="w-full md:w-auto h-6 mt-6 lg:ml-16">
                            <Social />
                        </div>
                        }   
                    </div>
                    <div className={`flex items-start w-full md:w-auto h-6 lg:ml-16 text-xl mt-2 shadow-sm`}>
                        <a
                            href="https://blog.yonihodeffi.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-2 bg-yellow-500 text-black rounded animated fadeIn lg:ml-4 px-4 py-2 no-underline hover:no-underline`}
                            data-place="bottom"
                            style={{
                                animationDelay: '5.5s',
                            }}
                        >
                            Check out my new blog here!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
