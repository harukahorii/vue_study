new Vue({
  el: '#app',
  filters: {
    filter: function(message, foo, num) {
      console.log(message, foo, num)
    }
  }
})
