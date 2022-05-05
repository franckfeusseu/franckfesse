// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

/* vuetify   */
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';

import DefaultLayout from '~/layouts/Default.vue'


/* Normalize.css */
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

export default function (Vue, { router, head, isClient, appOptions }) {
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
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900',
  });
  
  const opts = {};
  Vue.use(Vuetify);
  
  appOptions.vuetify = new Vuetify(opts);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  Vue.component('font-awesome', FontAwesomeIcon )
}
