var app = new Vue({
  el: '#app',
  data: {
    order: false,
  // フォーム入力と紐付けるデータ
    budget: 300,
    // 表示数
    limit: 2,
    // 元になるリスト
    list: [
      { id:1, name:'りんご', price: 100 },
      { id:2, name:'ばなな', price: 200},
      { id:3, name:'いちご', price: 400},
      { id:4, name:'オレンジ', price: 300},
      { id:5, name:'メロン', price: 500}
    ]
  },
  computed: {
    // budget以下のリストを返す算出プロパティ
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget
      }, this)
    },
    sorted: function() {
      // sortedを追加
      return _.orderBy(this.matched, 'price', this.order ? 'desc':'asc')
    },
    // リストをsortedに変更
    limited: function() {
      return this.sorted.slice(0, this.limit)
    },
    filteredList() {
      return this.limited
    }
  }
})
