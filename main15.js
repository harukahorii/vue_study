new Vue ({
  el: '#app',
  created: function() {
    this.$emit('input', '2020-02-15')
  }
})