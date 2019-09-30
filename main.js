// クラスとスタイル属性へのデータバインディングは、オブジェクトや配列を
// バインドするとクラス名やCSSプロパティとして展開されます。

var app = new Vue({
  el: '#app',
  data: {
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray'
  }
  
})