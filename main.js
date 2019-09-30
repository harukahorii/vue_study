
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      scroll: 0
    },
    mounted: function() {
      this.scroll = 100 /* 要素のスクロール量を操作*/
    }
  })