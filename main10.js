// new Vue({
//   el: '#app',
//   directives: {
//     focus: {
//       // 紐づいている要素がDOMに挿入される時
//       inserted: function(el) {
//         // 要素にフォーカスをあてる
//         el.focus()
//         console.log(v-focus)
//       }
//     }
//   }
// })


Vue.directive('example', {
  bind: function(el, binding) {
    console.log('v-example bind')
  },
  inserted: function(el, binding) {
    console.log('v-example inserted')
  },
  update: function(el, binding) {
    console.log('v-example update')
  },
  componentUpdated: function(el, binding) {
    console.log('v-example componentUpdated')
  },
  unbind: function(el, binding) {
    console.log('v-example unbind')
  },
})