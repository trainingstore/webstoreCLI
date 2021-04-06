<template src="./Product.html"></template>
<script>
  import MyHeader from './Header.vue'
  // import axios from 'axios'

  export default {
    components: { MyHeader },
    data(){
      return {
        product: ''
        // ,
        // products: []
      }
    },
    // created: function () {
    //   axios.get('/products.json')
    //   .then((response)=>{
    //     this.product = response.data.products.filter(
    //       product => product.id == this.$route.params.id
    //     )[0]
    //     this.product.image = '/' + this.product.image;
    //   })
    // },
    // filters: {
    //   formatPrice (price) {
    //     if (isNaN(price)) return '';
    //     return price.toLocaleString('en-US', {
    //       style: 'currency',
    //       currency: 'USD'
    //     })
    //   }
    // },
    methods: {
      edit(){
        this.$router.push({name: 'Edit'});
      }
    }
  }
</script>
