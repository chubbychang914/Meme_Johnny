import { getCurrentInstance } from "vue"

export default () => {
  // 加到全局後還要從這邊引入
  const { proxy: { $gsap } } = getCurrentInstance()

  // 主頁 ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  const onPageLoadAnimation = () => {
    const tl = $gsap.gsap.timeline()
    tl.fromTo(".left-panel",
      { xPercent: -100 },
      { duration: 2, xPercent: 0, ease: "power.out" })
    tl.fromTo(".right-panel",
      { xPercent: 100 },
      { duration: 2, xPercent: 0, ease: "power.out" }, "<")
  }

  return { onPageLoadAnimation }
}
