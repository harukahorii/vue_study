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
var app = new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
  }
})