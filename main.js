// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Vue.js!'
//     list: ['りんご', 'バナナ', 'いちご']
//     show: true
//   }
//   methods: {
//     handleClick: function(event) {
//       alert(event.target) 
//     }
//   }
// })

// var state = { count: 0 }
// var app = new Vue({
//   el: '#app',
//   data: {
//     state: state
//   }
// })

// state.count++

// dataオプションの直下のプロパティは後から追加できないため、
// 内容が決まってない場合でも初期値や空データとして定義しておく必要があります。
// var app = new Vue({
//   el: '#app',
//   data: {
//     newTodoText: '',
//     visitCount: 0,
//     hideCompletedTodos: false,
//     todos: [],
//     error: null
//   }
// })

// データバインディングでは、ルートに定義したプロパティだけでなく、
// ネストされているオブジェクトのプロパティや、配列の要素を使用することもできます。
var app = new Vue({
  el: '#app',
  data: {
    // オブジェクトデータ
    message: {
      value: 'Hello Vue.js!'
    },
    // 配列データ
    list: ['りんご', 'バナナ', 'いちご'],
    // 別のデータを使用してlistから取り出す要素を動的に
    num: 1
  }
})