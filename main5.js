new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    handler: function(comment) {
      console.log(comment)
    }
  }
})

// 通常のHTMLでは、同じイベントをハンドルしたDOMがネストされている場合
// event.target要素から順に外側に（親要素方向）に向かってハブリング
// (ターゲットを包含している要素のイベントが連鎖して行われる)します。
// イベント修飾子を付与することでハブリングを制御できます。

