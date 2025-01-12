const positionHead = [0, 0, 0]
const rotationHead = [0, 0, 0]

export const setPositionHead = (props: number[]) => {
  positionHead[0] = props[0]
  positionHead[1] = props[1]
  positionHead[2] = props[2]
}

export const setRotationHead = (props: number[]) => {
  rotationHead[0] = props[0]
  rotationHead[1] = props[1]
  rotationHead[2] = props[2]
}

export const getPositionHead = (): number[] => {
  return positionHead
}

export const getRotationHead = (): number[] => {
  return rotationHead
}
