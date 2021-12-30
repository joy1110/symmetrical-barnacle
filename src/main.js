import { createApp } from "vue";
import App from "./App.vue";

// 共享的css
import "./assets/scss/main.scss"
import "./assets/scss/pagination.scss"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFacebookF, faInstagram, faYoutube, faX)

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

/* add font awesome icon component */
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
