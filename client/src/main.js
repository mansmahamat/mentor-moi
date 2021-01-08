import Vue from 'vue'
import Vuex from 'vuex';
import router from './router'
import App from './App.vue'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { email, alpha_spaces, confirmed, min, required, regex } from 'vee-validate/dist/rules';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin,faGithubSquare,faTwitterSquare, faDiscord} from '@fortawesome/free-brands-svg-icons'
import { faHeart, faMapMarkerAlt, faAt, faLock, faHandPaper, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueToast from 'vue-toast-notification';
import moment from 'moment';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import store from './store/mentors'

library.add(faGithubSquare,
            faTwitterSquare,
            faSyncAlt,
            faLinkedin,
            faDiscord,
            faHeart,
            faMapMarkerAlt,
            faAt,
           
            faLock,
            faHandPaper)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
  }
});

extend('email', {
    ...email,
    message: 'Ceci n\'est pas un email'
  });

  extend('alpha_spaces', {
    ...alpha_spaces,
    message: 'Ce champ ne peut contenir que des caractères alphabétiques'
  });

  extend('confirmed', {
    ...confirmed,
    message: 'Les mots de passe ne sont pas identiques'
  });

  extend('min', {
    ...min,
    message: 'Le mot de passe doit faire minimum 6 caractères'
  });

  extend('required', {
    ...required,
    message: 'Ce champ ne peut être vide'
  });

  extend('regex', {
    ...regex,
    message: 'Les caractères spéciaux ne sont pas acceptés'
  });




import('./assets/styles/index.css');

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueToast);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
let instance = Vue.$toast.open('You did it!');
instance.dismiss();
// Dismiss all opened toast immediately
Vue.$toast.clear();


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
