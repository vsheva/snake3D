export function DirectionalLight() {
  return (
    <directionalLight
      position={[-3, 3, 5]}
      shadow-mapSize={[1024 * 2, 1024 * 2]}
      intensity={1.5}
      castShadow
      shadow-camera-near={0.1}
      shadow-camera-far={20}
      shadow-camera-left={-14}
      shadow-camera-right={14}
      shadow-camera-top={14}
      shadow-camera-bottom={-14}
    />
  )
}
