'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Background.module.scss'

type Star = {
  id: number;
  left: number;
  top: number;
  duration: number;
};

function createStars(count: number): Star[] {
   return (
      Array.from({length: count}, (_, i)=> ({
         id: i,
         left: Math.random() * 100,
         top: Math.random() * 100,
         duration: 1 + Math.random() * 3,
      }))
   )
}

export default function StarLayer() {
   const [stars] = useState(() => createStars(150));

   return (
      // ref={containerRef}
      <div className={styles.star_layer}>
         {
            stars.map((star)=> {
               return (
                  <div 
                     key={star.id} 
                     className={styles.star}
                     style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        "--twinkle-duration": `${star.duration}s`
                     } as React.CSSProperties}
                  />
               )
            })
         }
      </div>
   )
}


   // const containerRef = useRef<HTMLDivElement | null>(null);

   // const createStars = () => {
   //    const $star_container = containerRef.current;
   //    if (!$star_container) return;

   //    for(let i = 0; i < 100; i++) {
   //       const $star = document.createElement('div');
   //       $star.className = `${styles.star}`;
   //       $star.style.left = `${Math.random() * 100}%`;
   //       $star.style.top = `${Math.random() * 100}%`;
   //       $star.style.setProperty('--twinkle-duration', `${1 + Math.random() * 3}s`);
   //       $star_container.appendChild($star);
   //    }
   // }

   // useEffect(()=> {
   //    createStars();
   // }, []);