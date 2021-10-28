// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'


/* Nomralize.css */
import "normalize.css"

/* reset.css     */
// import "./assets/reset.css"

/* Prism.css  */
import 'prismjs/themes/prism.css'

// fontawesome 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faArrowDown, faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false
library.add(faGithub, faLinkedin, faArrowDown, faArrowRight, faEnvelope)

export default function (Vue, { router, head, isClient }) {
  //Global Head Metadata
  head.meta.push(
    {
      key: "author",
      name: "author",
      content: "Franck Fesse" 
    },
    {
      key: 'keywords',
      name: 'keywords',
      content: 'Devops Python aws'
    }
  )

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  Vue.component('font-awesome', FontAwesomeIcon )
}
