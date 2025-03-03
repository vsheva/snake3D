import { fieldCONFIG } from '../config/fieldConfig'
import { getField } from '../engine/field/fieldPerLevel'
import { Grid } from './Grid'
import { Line } from './Line'

export const Field = () => {
  const {
    fieldCOLOR: fieldColor,
    fieldRATIO: fieldRatio,
    // fieldSIZE: fieldSize,
  } = fieldCONFIG
  const fieldSize = getField()
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
