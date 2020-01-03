// Vue.component('my-component', {
//   template: '<p>{{ message }}</p>',
//   data: function() {
//     return {
//       message: 'Hello Vue.js'
//     }
//   }
// })

// Vue.component('comp-child', {
//   // テンプレートで受け取ったvalを使用
//   template: '<p>{{ val }}</p>',
//   // 受け取る属性名を指定
//   props: ['val']
// })

new Vue({
  data: {
    valueA: 'これは子A',
    valueB: 'これは子B'
  }
})