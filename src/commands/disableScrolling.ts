export const disableScrolling = () => {
  let lastY = 1
  document.addEventListener(
    'touchmove',
    function (event) {
      const lastS = document.documentElement.scrollTop
      if (lastS == 0 && lastY - event.touches[0].clientY < 0 && event.cancelable) {
        event.preventDefault()
        event.stopPropagation()
      }
      lastY = event.touches[0].clientY
    },
    { passive: false }
  )
}
