var app = new Vue({
  el: '#app',
  data: {
    width: 800
  },
  computed: {
    halfWidth: {
      get: function() { return this.width / 2 },
      // halfWidthの2倍の数値をwidthに入れる
      set: function(val) { this.width = val * 2 }, 
    }
  }
})
