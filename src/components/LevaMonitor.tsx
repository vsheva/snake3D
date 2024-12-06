import { Leva } from 'leva'

export const LevaMonitor = () => {
  return (
    <Leva
      collapsed={false}
      oneLineLabels={false}
      flat={true}
      theme={{
        sizes: {
          titleBarHeight: '28px',
        },
        fontSizes: {
          root: '10px',
        },
      }}
    />
  )
}
