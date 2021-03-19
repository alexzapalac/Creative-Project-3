<template>
<div>
  <div class="info">
    <p>Congratulations, you have ordered {{random}} cases of {{plant.name}}!</p>

    <p>This product is sourced from {{product.name}} at {{product.family}} per item,
      for a total of. Your credit card has been billed and you will receive
      delivery within 3-30 weeks. Please contact us if it doesn't arrive within 1 year.</p>
  </div>
  <div class="image">
    <img :src="'/img/'+this.plant.image">
  </div>

  <div class="review">

    <p><i>#{{plant.id}}</i></p>
      <h3>Add a Comment</h3>
      <form v-on:submit.prevent="addComment">
        <input v-model="addedName" placeholder="Name">
        <textarea v-model="addedComment"></textarea>
        <br />
        <button type="submit">Comment</button>
      </form>
      <h3>Comments</h3>

  </div>
</div>

</template>

<script>
export default {
  name: 'Browse',
  data() {
    return {
      random: 0,
      amount: 0,
      plant: {},    
    }
  },
  created() {
    this.plant = this.$root.$data.plants.find(plant => plant.id === parseInt(this.$route.params.id));
    this.random =
      Math.floor(Math.random() * 90) + 10;
    this.amount = this.random * parseFloat(this.product.price.replace(/\$|,/g, ''));
    this.amount = this.amount.toFixed(2);
  },

}
</script>

<style scoped>
.intro {
  font-style: italic;
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.products img {
  border: 1px solid #333;
  height: 50px;
  width: 40px;
  margin-left: 10px;
  object-fit: cover;
}
</style>
