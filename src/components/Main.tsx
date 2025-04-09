import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

import { LevaMonitor } from './LevaMonitor'
import { Game } from './Game'
import Menu from './Menu'
import { Wrapper } from './Wrapper'

import { useMenuStore } from '../store/menuStore'
import { cameraCONFIG } from '../config/cameraConfig'

import '../styles/main.css'

function Main() {
  const { isVisible } = useMenuStore()
  const { far, near, fov, aspect, zoom } = cameraCONFIG
  const cameraSettings = useMemo(
    () => ({
      far,
      near,
      fov,
      aspect,
      zoom,
    }),
    [far, near, fov, aspect, zoom]
  )

  return (
    <div className='main'>
      <Wrapper>
        <LevaMonitor />

        <Canvas
          dpr={[1, 2]}
          shadows
          gl={{
            antialias: true,
            toneMapping: ACESFilmicToneMapping,
            outputColorSpace: SRGBColorSpace,
          }}
          camera={cameraSettings}
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
