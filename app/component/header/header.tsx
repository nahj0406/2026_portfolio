"use client";

import Icon from "@/component/Icon/icon";
import styles from "./header.module.scss";
import Img from "../Img/img";
import { StarProps } from "@/utils/interfaces";
import clsx from "clsx";
import { ReactNode, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

function Star({ className, lightColor, src, width, height, alt }: StarProps) {
  return (
    <div className={className ? className : ""}>
      <Img src={src} width={width} height={height} alt={alt} />
      <div
        className={styles.light_circle}
        style={{ "--light-color": lightColor } as React.CSSProperties}
      ></div>

      <div className={styles.light__line}></div>
    </div>
  );
}

function HiddenBox({ children }: { children: ReactNode }) {
  return (
    <article className={styles.motion_box} style={{ overflow: "hidden" }}>
      {children}
    </article>
  );
}

export default function Header() {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const Splitting = (word: string) => {
    const array = word.split("");

    // return array.map((char, i)=> {
    //    const span = document.createElement('span');
    //    span.classList.add(`char-${i+1}`);
    //    span.textContent = char;
    //    return span
    // })

    return array.map((char, i) => (
      <span
        className={clsx("char", `char-${i + 1}`)}
        style={{ "--delay": `${i + 1}` } as React.CSSProperties}
        key={i}
      >
        {char}
      </span>
    ));
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.menu_btn}
        onClick={() => setMenuActive((prev) => !prev)}
      >
        <Icon icon="menubar" />
      </div>

      <div className={clsx(styles.nav_wrap, { [styles.active]: menuActive })}>
        <div className={styles.nav_bg}></div>

        <nav className={styles.nav}>
          <h5 className={clsx(styles.nav_title, "font-[35px] paperLogy")}>
            {Splitting("Chapters")}
          </h5>

          <ul className={styles.outer_menu}>
            <li>
              <Star
                src={"/img/header/menu_star_yellow.svg"}
                width={40}
                height={40}
                alt={"노란별"}
                className={styles.star}
                lightColor={"rgba(255,193,59,0.7)"}
              />
              <div className={styles.txt_box}>
                <HiddenBox>
                  <span className="paperLogy">chapter 01</span>
                </HiddenBox>
                <HiddenBox>
                  <h5>about us</h5>
                </HiddenBox>
              </div>
            </li>

            <li>
              <Star
                src={"/img/header/menu_star_red.svg"}
                width={40}
                height={40}
                alt={"빨간별"}
                className={styles.star}
                lightColor={"rgba(255,59,59,0.7)"}
              />
              <div className={styles.txt_box}>
                <HiddenBox>
                  <span className="paperLogy">chapter 02</span>
                </HiddenBox>

                <HiddenBox>
                  <h5>career</h5>
                </HiddenBox>
              </div>
            </li>

            <li>
              <Star
                src={"/img/header/menu_star_blue.svg"}
                width={40}
                height={40}
                alt={"파란별"}
                className={styles.star}
                lightColor={"rgba(103,181,244,0.7)"}
              />
              <div className={styles.txt_box}>
                <HiddenBox>
                  <span className="paperLogy">chapter 03</span>
                </HiddenBox>

                <HiddenBox>
                  <h5>skiils</h5>
                </HiddenBox>
              </div>
            </li>

            <li>
              <Star
                src={"/img/header/menu_star_violet.svg"}
                width={40}
                height={40}
                alt={"보라별"}
                className={styles.star}
                lightColor={"rgba(220,188,255,0.7)"}
              />
              <div className={styles.txt_box}>
                <HiddenBox>
                  <span className="paperLogy">chapter 04</span>
                </HiddenBox>

                <HiddenBox>
                  <h5>portfolio</h5>
                </HiddenBox>
              </div>
            </li>

            <li>
              <Star
                src={"/img/header/menu_star_green.svg"}
                width={40}
                height={40}
                alt={"초록별"}
                className={styles.star}
                lightColor={"rgba(211,255,190,0.7)"}
              />
              <div className={styles.txt_box}>
                <HiddenBox>
                  <span className="paperLogy">chapter 05</span>
                </HiddenBox>

                <HiddenBox>
                  <h5>toy project</h5>
                </HiddenBox>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
