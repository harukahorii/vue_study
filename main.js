// まずはv-onデレクティブを使用して、ボタンがクリックされるとincrement
// という名前のメソッドが呼び出されるようにします。
// incrementメソッドをmethodsオプションに定義して、dataオプションに
// 登録されているcountプロパティを「1」増やす処理を行います
var app = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    increment: function() {
      this.count += 1
    }
  }
  
})