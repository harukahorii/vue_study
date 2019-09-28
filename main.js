var app = new Vue({
  el: '#app',
  // data: {
  //   message: 'Hello Vue.js!'
  //   list: ['りんご', 'バナナ', 'いちご']
  // }
  methods: {
    handleClick: function(event) {
      alert(event.target) 
    }
  }
})