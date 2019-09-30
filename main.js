// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Vue.js!'
//     list: ['りんご', 'バナナ', 'いちご']
//     show: true
//   }
//   methods: {
//     handleClick: function(event) {
//       alert(event.target) 
//     }
//   }
// })

var state = { count: 0 }
var app = new Vue({
  el: '#app',
  data: {
    state: state
  }
})

state.count++