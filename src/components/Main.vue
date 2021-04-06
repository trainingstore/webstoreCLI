<template src="./Main.html"></template>
<style src="./Main.css"></style>
<script>
  import MyHeader from './Header.vue'
  import { mapGetters } from 'vuex'
  import { productsRef } from '../firebase'

  export default {
    name: 'imain',
    firebase: {
      products: productsRef
    },
    data(){
      return {
        cart: [],
        products: []
      }
    },
    // created: function () { // function because of this
      // this.$store.dispatch('initStore')
    // },
    components: { MyHeader },
    computed: {
      ...mapGetters(['session']),
      cartItemCount () {
        return this.cart.length || ''
      },
      sortedProducts () {
        let productsArray = Array.from(this.products)
        if (!Array.isArray(productsArray)) return []
        function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
          return 0
        }
        return productsArray.sort(compare)
      }
    },
    filters: {
      formatPrice (price) {
        return price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
      }
    },
    methods: {
      canAddToCart (aProduct) {
        return aProduct.availableInvetory > this.cartCount(aProduct.id);
      },
      checkRating(aProduct, n){
        return aProduct.rating - n >= 0;
      },
      cartCount(id){
        let count = 0;
        this.cart.forEach((itemId) => {
          if (itemId === id) count++;
        });
        return count;
      },
      addToCart(aProduct) {
          this.cart.push( aProduct.id );
      },
      showCheckout() {
        this.showProduct = this.showProduct ? false : true;
      },
      submitForm(){
        alert('Submitted');
      }
    }
  }
</script>
