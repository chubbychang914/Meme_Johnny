import { getCurrentInstance } from "vue"

export default () => {
  const { proxy: { $gsap } } = getCurrentInstance()
  // 主頁 ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  // right panel // TODO move the homepage animations into one timeline
  const rPanelEnter = () => {
    $gsap.gsap.fromTo(".right-panel",
      {
        x: 1000
      },
      {
        duration: 2,
        x: 0,
        ease: "power.out"
      })
  }
  // navbar -> need to match speed of right panel when entering
  const lPanelEnter = () => {
    $gsap.gsap.fromTo("#Navbar",
      {
        x: -1000,
      },
      {
        duration: 2,
        x: 0,
        ease: "power.out"
      })
  }
  return { rPanelEnter, lPanelEnter }
}
