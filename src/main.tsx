import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { LevaMonitor } from './components/LevaMonitor'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import { Scene } from './Scene'
import './styles/main.css'
import Wrapper from './components/Wrapper'
import { useMenuStore } from './store/menuStore'
import { cameraCONFIG } from './config/cameraConfig'
import Menu from './components/Menu'

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
          <Scene />
        </Canvas>
        {isVisible && <Menu />}
      </Wrapper>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
