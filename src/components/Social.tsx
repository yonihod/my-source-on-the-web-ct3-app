import React from "react";
import social from "../data/social";
import styles from "../styles/Social.module.css";

const Social = () => {
  return (
    <div className={`${styles.container} fadeIn`}>
      {social.map((x, i) => {
        const Icon = x.icon;

        return (
          <a
            key={x.title}
            href={x.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${x.class} animated fadeIn`}
            style={{
              animationDelay: `${i *0.25 + 0.25}s`,
            }}
            data-tip={x.title}
            data-place="bottom"
          >
            <Icon color="#FFF" size="0.9em" />
            <span className="sr-only">{x.title}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Social;