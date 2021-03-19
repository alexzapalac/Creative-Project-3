<template>
<div>
  <div class="wrapper">
    <div class="intro">
      <h4>Welcome to Plant Haven! We hope to bring the beauty of nature to your home by offering the perfect complement to your home.</h4>
      <h4>Just click on any of our images to learn more about each plant!</h4>
    </div>
  </div>
  <ProductList :plants="plants" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
  plants() {
    return this.$root.$data.plants.filter(plant => plant.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
  }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.intro {
  text-align: center;
  line-height: 1.5em;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>