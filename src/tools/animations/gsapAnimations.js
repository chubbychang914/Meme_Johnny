import { gsap } from "gsap"

export const gsap_enter = () => {
  gsap.fromTo(".right-panel",
    {
      x: 1000
    },
    {
      duration: 3,
      x: 0,
    })
}
