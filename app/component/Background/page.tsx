'use client'
import dynamic from "next/dynamic"
import styles from './Background.module.scss'
import FluidGlass from './FluidGlass'

const StarLayer = dynamic(() => import('./starLayer'), {
  ssr: false,
})

// fluidGlass는 생각보다 까다로움. 내가 원하는 형태로 커스텀 할 거면 차라리 그냥 직접 만들어서 쓰는게 낫겠다 싶음.
// 마침 leb 파일도 있으니까. 내용 확인해서 직접 만들자 그냥. canvas랑 3d 관련 라이브러리 돌리면 될것 같은데 안되겠다 싶으면 다른걸로
// 우회해야지 뭐..

export default function Background() {
   return (
      <div className={styles.bg_container}>
         <StarLayer />
         {/* <FluidGlass 
            mode="lens" // or "bar", "cube"
            lensProps={{
               scale: 0.25,
               ior: 1.15,
               thickness: 5,
               chromaticAberration: 0.1,
               anisotropy: 0.01  
            }}
         /> */}
      </div>
   )
}