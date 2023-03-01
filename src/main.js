import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faEnvelope, faFile, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faLaravel, faLinkedin, faPhp, faSass, faVuejs } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faBars,
    faXmark,
    faGithub,
    faHtml5,
    faCss3Alt,
    faJs,
    faSass,
    faBootstrap,
    faVuejs,
    faPhp,
    faLaravel,
    faEnvelope,
    faLinkedin,
    faFile
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
