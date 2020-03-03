

const Vue = require( 'vue' );
Vue.config.productionTip = false

import HelloWord from './components/HelloWord'


Vue.component( 'hellow', HelloWord );


var vm = new Vue( {
  el: '#app',
  data: {},
  created () { },
  methods: {},
} );