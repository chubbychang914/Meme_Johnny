import { getCurrentInstance } from "vue"

export default () => {
  // 加到全局後還要從這邊引入
  const { proxy: { $gsap } } = getCurrentInstance()
  // 主頁 ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  // right panel // TODO move the homepage animations into one timeline
  const homeRightPanelEnter = () => {
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
  const homeNavEnter = () => {
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
  return { homeRightPanelEnter, homeNavEnter }
}
