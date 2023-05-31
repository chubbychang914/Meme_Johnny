import { gsap } from "gsap"
let tl = gsap.timeline()
// 首頁
//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 主頁 right panel // TODO move the homepage animations into one timeline
const rPanelEnter = () => {
  gsap.fromTo(".right-panel",
    {
      x: 1000
    },
    {
      duration: 2,
      x: 0,
      ease: "power.out"
    })
}
// 主頁 navbar -> need to match speed of right panel when entering
const lPanelEnter = () => {
  gsap.fromTo("#Navbar",
    {
      x: -1000,
    },
    {
      duration: 2,
      x: 0,
      ease: "power.out"
    })
}

//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
export default { rPanelEnter, lPanelEnter }