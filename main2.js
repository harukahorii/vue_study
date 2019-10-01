// $refを使ってDOMを操作しても、データに変化があれば
// 仮装DOMによって上書きされることがある

var app = new Vue({
  el: '#app',
  
  data: {
    show: true
  },
  methods: {
    handleClick() {
      var count = this.$refs.count
      if (count) {
        count.innerText = parseInt(count.innerText,10) + 1
      }
    }
  }
})
