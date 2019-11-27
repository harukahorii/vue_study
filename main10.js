new Vue({
  el: '#app',
  directives: {
    focus: {
      // 紐づいている要素がDOMに挿入される時
      inserted: function(el) {
        // 要素にフォーカスをあてる
        el.focus()
      }
    }
  }
})
