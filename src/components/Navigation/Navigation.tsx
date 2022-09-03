import React, { useState } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
// import ThemeContext from "../context/ThemeContext";
import sections from "../../data/sections";
import styles from "./Navigation.module.css";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import Image from "next/image";
import Icon from "@assets/icon.png";


const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dark, toggleDark ] = useState<boolean>(true);

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const scrollTo = (id: string) =>
    scroller.scrollTo(id, {
      delay: 50,
      offset: -50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const SectionLink = (x: { icon: any; id: string; title: string; }, index: React.Key | null | undefined) => {
    const Icon = x.icon;

    return (
      <IconContext.Provider value={{ size: "1.25rem" }} key={index}>
        <div
          key={x.id}
          data-tip={x.title}
          data-place="right"
          onClick={() => scrollTo(x.id)}
        >
          <Icon />
        </div>
      </IconContext.Provider>

    );
  };

  return (
    <div className={`${styles.container} animated ${isMobile ? "fadeInDown" : "fadeInLeft"}`}>
      <div
        className="flex-center cursor-pointer"
        onClick={scrollToTop}
        data-tip="Go to Top"
        data-place="right"
      >
        <Image className="grayscale" src={Icon}/>
      </div>
      <div className="hidden md:flex flex-col justify-center items-center">
        <IconContext.Provider value={{ size: "1.25rem" }}>
          <div className={styles.menu}>
            <MdMenu />
          </div>
        </IconContext.Provider>
        <div className={styles.sectionLinks}>{sections.map(SectionLink)}</div>
      </div>
      <IconContext.Provider value={{ size: "1.25rem" }}>
        <div
          className="flex-center cursor-pointer hover:text-primary-500"
          onClick={() => toggleDark(!dark)}
          data-tip="Toggle Dark Mode"
          data-place="right"
        >
          {true ? <IoIosMoon /> : <IoIosSunny />}
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Navigation;
