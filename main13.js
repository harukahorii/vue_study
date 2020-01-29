Vue.component('comp-child', {
  template: '<li>{{ name }} HP.{{ hp }}\
    <button v-on:click="doAttack">攻撃する</button></li>',
  props: { id: Number, name: String, hp: Number },
  methods: {
    doAttack: function() {
      this.$emit('attack', this.id)
    }
  }
})

new Vue({
  el: '#app',
  data: {
    list: [
      
    ]
  }
})