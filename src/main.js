import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false
let data = {
  plants: mock,
  cart: [],


  item: [],
  addToItem() {
    this.item.push({
      id: this.id,
      name: this.name,
      otherName: this.otherName,
      family: this.family,
      image: this.image
    })
  },

  addToCart() {
    this.cart.push({
      id: this.id,
      name: this.name,
      otherName: this.otherName,
      family: this.family,
      image: this.image
    });
  }

}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
