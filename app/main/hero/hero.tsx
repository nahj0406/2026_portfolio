import clsx from 'clsx'
import styles from './hero.module.scss'


export default function Hero() {
   return (
      <section className={clsx(styles.hero, 'sec')}>
         <div className={clsx('font-[120px]', styles.titleBox)}>
            <h1 className={clsx('paperLogy', styles.title)}>
               NAHJ <br />
               PORTFOLIO
            </h1>
            <h3 className={clsx('paperLogy', styles.sub_title)}>2026</h3>
         </div>

         <div className={styles.scroller}>
            <div className={styles.border}>
               <div className={styles.circle}></div>
            </div>
         </div>
      </section>
   )
}