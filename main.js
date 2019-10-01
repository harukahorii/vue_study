var app = new Vue({
  el: '#app',
  data: {
  
    list: []
  },
  created: function() {
    axios.get('https://api.myjson.com/bins/1fwqkt').then(function(response){
      this.list = response.data
    }.bind(this)).catch(function(e) {
      console.error(e)
    })
  }
})
