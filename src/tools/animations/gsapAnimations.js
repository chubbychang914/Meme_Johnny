import { gsap } from "gsap"
// 首頁
//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// right panel
const rPanelEnter = () => {
  gsap.fromTo(".right-panel",
    {
      x: 1000
    },
    {
      duration: 3,
      x: 0,
      ease: "bounce.out"
    })
}
// left panel
const lPanelEnter = () => {
  gsap.fromTo("#Navbar",
    {
      x: -1000,
    },
    {
      duration: 3,
      x: 0,
      ease: "bounce.out"
    })
}

//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
export default { rPanelEnter, lPanelEnter }