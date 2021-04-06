<template src="./Form.html"></template>
<style src="./Form.css"></style>
<script>
  import MyHeader from './Header.vue';

  export default {
    name: 'Form',
    props: ['cartItemCount'],
    data(){
      return {
        states: {
          AL: 'Alabama',
          AR: 'Arizona',
          CA: 'California',
          NV: 'Nevada'
        },
        order: {
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          zip: '',
          state: '',
          method: 'Home Address',
          business: 'Business Address',
          home: 'Home Address',
          gift: 'Send As A Gift',
          sendGift: 'Send As A Gift',
          dontSendGift: 'Do Not Send As A Gift'
        },
        madeOrder: false
      }
    },
    components: { MyHeader },
    methods: {
      submitForm(){
        this.madeOrder = true
      }
    }
  }
</script>
