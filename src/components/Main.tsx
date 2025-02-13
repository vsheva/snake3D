import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { LevaMonitor } from './LevaMonitor'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import { Game } from './Game'
import '../styles/main.css'
import Wrapper from './Wrapper'
import { useMenuStore } from '../store/menuStore'
import { cameraCONFIG } from '../config/cameraConfig'
import Menu from './Menu'
import { OrbitControls } from '@react-three/drei'

function Main() {
  const { isVisible } = useMenuStore()
  const { far, near, fov, aspect, zoom } = cameraCONFIG
  return (
    <div className='main'>
      <Wrapper>
        <LevaMonitor />
        <Canvas
          dpr={[1, 2]}
          gl={{
            antialias: true,
            toneMapping: ACESFilmicToneMapping,
            outputColorSpace: SRGBColorSpace,
          }}
          camera={{ far, near, fov, aspect, zoom }}
          shadows
        >
          <OrbitControls />
          <Game />
        </Canvas>
        {isVisible && <Menu />}
      </Wrapper>
    </div>
  )
}

export default Main
