<template>

<div class="wrapper">
  <div class="container" v-for="plant in item" :key="plant.id">
    <div class="image">
        <img :src="'/img/'+plant.image">
    </div>    

    <div class="info">
        <p><b>Name:</b> {{plant.name}}</p>
        <p><b>Scientific Name:</b> {{plant.otherName}}</p>
        <p>The {{plant.name}} belongs to the {{plant.family}}.</p>
    </div>

    <div class="suggestion">
        <p>Would this item look great in your house or garden? Then you should add it to your cart!</p>
    </div>
    <br/>
    <div class="add">
        <button type="auto" v-on:click="addToCart(plant)">Add to Cart</button>
    <br/>    

  </div>
  <br/>


    <div class="cart-print">
        <h3>Your Cart</h3>
        <div class="cart-container" v-for="item in cart" :key="item.id">
            <div class="cart-items">
                <div class="cart-img">
                    <img :src="'/img/' + item.image">
                </div>
                <div class="cart-name">
                    <p>{{item.name}}</p>
                </div>
                <div class="button-container itemInfo">
                    <button class="remove-button" v-on:click='removeFromCart("item.id"-1)'>Remove</button>
                </div>
            </div>
        </div>

    </div>
  </div>



</div>
</template>

<script>
export default {
    name: 'Item',

    props: {
        plants: Array,

    },

    data() {
        return {
            loading: false,
            data:{}
        }
    },

    computed: {
        item() {
            return this.$root.$data.item;
        },
        cart() {
            return this.$root.$data.cart;
        }
    },
    methods: {
      clearItem() {
        this.$root.$data.item.splice(0);
      },
      addToCart(plant) {
        this.$root.$data.cart.push(plant);
      },
      removeFromCart(location) {
          this.$root.$data.cart.splice(location, 1);
          this.$root.data.cartSize -=1;
      }
    }
}
</script>

<style scoped>

button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    margin: 10px;
}

textarea {
    width: 100%;
    max-width: 500px;
    height: 100px;
    padding: 10px;
    margin: 15px
}

.wrapper {
    margin-top: 40px;
}

.container {
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    align-items: center;
    line-height: 1.5em;
}

.image img {
    border: 2px solid #000000;
    height: 100%;
    width: 100%;
    margin-left: 10px;
    object-fit: cover;
}

.suggestion {
    padding: 0px;
    line-height: 1.5em;

}

.info {
    margin: 15 px;
    padding-left: 10px;

    flex-wrap: wrap;
}

.cart-img img {
    width: 70%;
}

.cart-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px
}
.cart-name {
    font-size: 100%;
}





</style>