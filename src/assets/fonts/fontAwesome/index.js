/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faCaretLeft, faCaretRight, faHouse, faLayerGroup, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faHouse)
library.add(faUser)
library.add(faLayerGroup)
library.add(faCaretLeft)
library.add(faCaretRight)


export { FontAwesomeIcon }