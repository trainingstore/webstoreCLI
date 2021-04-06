import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBilCU0HGiNgKf8yE4e80ghpyS1qVrlGS8",
  authDomain: "webstore-c9973.firebaseapp.com",
  databaseURL: "https://webstore-c9973-default-rtdb.firebaseio.com",
  projectId: "webstore-c9973",
  storageBucket: "webstore-c9973.appspot.com",
  messagingSenderId: "601182374039",
  appId: "1:601182374039:web:e4dc59a1794c5c1393c1d2",
  measurementId: "G-JSH0W49B9H"
})

export const db = app.database()
export const productsRef = db.ref('products')
