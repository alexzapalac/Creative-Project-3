<template>
<div id="app">
  <div id="menu">
    <div id="brand" v-on:click="clearItem()">
      <router-link to="/">
        <img src="/images/logo.jpg">
      </router-link>
    </div>
  </div>
  <div id="brand-name">
    <h1><b>Plant Haven</b></h1>
  </div>
  <router-view />
  <footer>
    <p>Author: Alex Zapalac</p>
    <p><a href="https://github.com/alexzapalac/Creative-Project-3">GitHub Repository</a></p>
  </footer>  
</div>
</template>


<script>
export default {
  name: 'App',

  data() {
    return {

    }
  },

  computed: {
    showCartSize(){
      return this.$root.$data.cartSize;
    },

  },
  methods: {
    clearItem(){
      this.$root.$data.item.splice(0);
    }
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 0px;
}

h1 {
  margin-bottom: 20px;
}

#menu a {
  color: #a5f7f0;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

#brand img {
  height: 200px;
}

#brand-name {
  text-align: center;
}

.h1 {
  padding-top: 0px;
  padding-bottom: 10px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;

}

.browse {
  margin-right: 50px;
}

.footer {
  margin-top: 30px;
  text-align: center;
  margin-top: 25px;
}
</style>
