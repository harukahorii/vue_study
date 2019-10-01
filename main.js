// 要素を繰返し描写する

var app = new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ]
  },
  methods: {
    // ボタンのクリックイベントのハンドラ
    doAttack: function(index) {
      this.list[index].hp -= 10
    }
  }
})
