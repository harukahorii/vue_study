Vue.component('comp-child', {
  template: '<button v-on:click="handleClick">イベント発火</button>',
  mrthods: {
    handleClick: function() {
      this.$emit('childs-event')
    }
  }
})

new Vue({
  el: '#app',
  methods: {
    praaarentsMethod: function() {
      alert('イベントをキャッ')
    }
  } })