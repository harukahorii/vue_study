new Vue({
  el: '#app',
  filters: {
    // 小数点以下第二位に丸めるフィルタ
    round: function(val) {
      return Math.round(val * 100)/100
    },
    // 度からラジアンに変換するフィルタ
    radian: function(val) {
      return val * Math.PI / 180
    }
  }
})
