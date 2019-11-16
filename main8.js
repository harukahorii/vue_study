var app = new Vue({
  el: '#app',
  data: {
    edited: false,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
    ]
  },
  created: finction() {
    var unwatch = this.$watch('list', function() {
      // listが編集されたことを記録する
      this.edited = true
      // 監視を解除
      unwatch()
    }, {
      deep: true
    })
  }
})
