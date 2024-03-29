/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faAnglesLeft, faAnglesRight, faBars, faCaretLeft, faCaretRight, faEnvelope, faHouse, faLayerGroup, faMobileScreenButton, faPowerOff, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faHouse)
library.add(faUser)
library.add(faLayerGroup)
library.add(faCaretLeft)
library.add(faCaretRight)
library.add(faGithub)
library.add(faLinkedin)
library.add(faEnvelope)
library.add(faMobileScreenButton)
library.add(faAnglesRight)
library.add(faAnglesLeft)
library.add(faPowerOff)
library.add(faBars)
library.add(faX)


export { FontAwesomeIcon }