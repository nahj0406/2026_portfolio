'use client'

import Icon from '@/component/Icon/icon'
import styles from './header.module.scss'
import Img from '../Img/img'
import { StarProps } from "@/utils/interfaces";
import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


export function Star({src, width, height, alt}:StarProps) {
   return (
      <div className={styles.star}>
         <Img src={src} width={width} height={height} alt={alt} />
         <div className={styles.light_circle}></div>

         <div className={styles.light__line}></div>
      </div>
   )
}

export function HiddenBox ({menuActive, children}: {menuActive: boolean; children: ReactNode}) {
   return (
      <AnimatePresence mode="wait">
        <motion.article
            id="motion"
            // key={menuActive}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className={styles.motion_box}
        >
            1. 플레머 모션 사용해서 article에 붙인다.
            2. 모션에 key값을 menuActive로 설정.
            3. 들어오는 모션, 나가는 모션 설정.
            4. article에 클래스 주고 overflow: hidden 주기.
            {children}
         </motion.article>
      </AnimatePresence>
   )
}


export default function Header() {

   const [menuActive, setMenuActive] = useState<boolean>(false);

   const Splitting = (word: string) => {
      const array = word.split('');

      // return array.map((char, i)=> {
      //    const span = document.createElement('span');
      //    span.classList.add(`char-${i+1}`);
      //    span.textContent = char;
      //    return span
      // })

      return array.map((char, index) => (
         <span className={`char-${index + 1}`} key={index}>{char}</span>
      ));
   }

   return (
      <header className={styles.header}>
         <div className={styles.menu_btn} onClick={()=> setMenuActive((prev)=> !prev)}>
            <Icon icon='menubar' />
         </div>

         <div className={clsx(styles.nav_wrap, {[styles.active]:menuActive})}>
            <div className={styles.nav_bg}></div>

            <nav className={styles.nav}>
               <h5 className={clsx(styles.nav_title, 'font-[35px] paperLogy',)}>{Splitting('Chapters')}</h5>

               <ul className={styles.outer_menu}>
                  <li>
                     <Star src={'/img/header/menu_star_yellow.svg'} width={40} height={40} alt={'노란별'} />
                     <div className={styles.txt_box}>
                        <span className='paperLogy'>chapter 01</span>
                        <h5>about us</h5>
                     </div>
                  </li>

                  <li>
                     <Star src={'/img/header/menu_star_red.svg'} width={40} height={40} alt={'빨간별'} />
                     <div className={styles.txt_box}>
                        <span className='paperLogy'>chapter 02</span>
                        <h5>career</h5>
                     </div>
                  </li>

                  <li>
                     <Star src={'/img/header/menu_star_blue.svg'} width={40} height={40} alt={'파란별'} />
                     <div className={styles.txt_box}>
                        <span className='paperLogy'>chapter 03</span>
                        <h5>skiils</h5>
                     </div>
                  </li>

                  <li>
                     <Star src={'/img/header/menu_star_violet.svg'} width={40} height={40} alt={'보라별'} />
                     <div className={styles.txt_box}>
                        <span className='paperLogy'>chapter 04</span>
                        <h5>portfolio</h5>
                     </div>
                  </li>

                  <li>
                     <Star src={'/img/header/menu_star_green.svg'} width={40} height={40} alt={'초록별'} />
                     <div className={styles.txt_box}>
                        <span className='paperLogy'>chapter 05</span>
                        <h5>toy project</h5>
                     </div>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}