var childSlotComp = {
  template: '<div><slot></slot></div>',
  data: function(){
      return{
          message: '子のmessageだよ。'
      }
  }
}

new Vue({
  el: '#app',
  components: {
      'child-slot-comp': childSlotComp
  },
  data: {
      message: '親のmessageだよ。'
  }
})