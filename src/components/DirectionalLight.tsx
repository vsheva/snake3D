export function DirectionalLight() {
  return (
    <directionalLight
      position={[-3, 3, 12]}
      shadow-mapSize={[1024 * 2, 1024 * 2]}
      intensity={1.5}
      castShadow
      shadow-camera-near={0.1}
      shadow-camera-far={20}
      shadow-camera-left={-20}
      shadow-camera-right={20}
      shadow-camera-top={20}
      shadow-camera-bottom={-20}
    />
  )
}
