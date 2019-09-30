// テンプレートベースで条件分岐
// v-ifとv-showディレクティブは、付与した要素の描画または表示に条件を適用する
//  okプロパティがtrueの時のみ<div>要素を表示
var app = new Vue({
  el: '#app',
  data: {
    ok: false
  }
})