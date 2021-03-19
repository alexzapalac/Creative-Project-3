<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="images/logo.png">
      </router-link>
    </div>
  </div>
  <router-view />
  <footer>
    <p>Author: Alex Zapalac</p>
    <p><a href="https://github.com/BYU-CS-260-Winter-2021/lab-3b-grocery-store-alexzapalac">GitHub Repository</a></p>
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
    }
  },
  methods: {

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
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
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
}
</style>
