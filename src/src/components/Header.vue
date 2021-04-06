<template src="./Header.html"></template>
<style scoped src="./Header.css"></style>

<script>
import firebase from 'firebase'

  export default {
    name: 'my-header',
    data () {
      return {
        sitename: 'Vue.js Pet Depot'
      }
    },
    props: ['cartItemCount'],
    beforeCreate () {
      firebase.auth().onAuthStateChanged((user)=> {
        this.$store.commit('SET_SESSION', user || false)
      })
    },
    methods: {
      showCheckout () {
        this.$router.push({name: 'Form'})
      },
      signIn () {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then((result) => {
          console.log(`signed in ${result.credential}`)
        }).catch((error) => {
          console.log(`error ${error}`)
        })
      },
      signOut () {
        firebase.auth().signOut().then(() => {
          console.log('signed out')
        }).catch((error) => {
          console.log(`error in sign out! ${error}`)
        })
      }
    },
    computed: {
      mySession () {
        return this.$store.getters.session
      }
    }
  }
</script>
