function Cat(name) {
  this.name = name
}
Vue.component('example', {
  props: {
    value: Cat
  }
})
new Vue({
  data: {
    value: new Cat('たま')
  }
})