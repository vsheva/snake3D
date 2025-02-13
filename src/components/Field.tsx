import { fieldCONFIG } from '../config/fieldConfig'
import { Grid } from './Grid'
import { Line } from './Line'

export const Field = () => {
  const {
    fieldCOLOR: fieldColor,
    fieldRATIO: fieldRatio,
    fieldSIZE: fieldSize,
  } = fieldCONFIG
  return (
    <group>
      <Grid />
      {/* <Line /> */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[fieldSize * fieldRatio, fieldSize * fieldRatio]} />
        <meshStandardMaterial color={fieldColor} />
      </mesh>
    </group>
  )
}
