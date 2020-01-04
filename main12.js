var myComponent = {
  template: '<p>MyComponent</p>'
}

new VTTCue({
  el: '#app',
  components: {
    'my-component': myComponent
  }
})