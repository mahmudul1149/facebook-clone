import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNYzUanqnS-eoSZfwBm8Ny3HU3dW3m3GM",
  authDomain: "facebook-clone-bedcc.firebaseapp.com",
  projectId: "facebook-clone-bedcc",
  storageBucket: "facebook-clone-bedcc.appspot.com",
  messagingSenderId: "158748436523",
  appId: "1:158748436523:web:f389c7007d91baff6fe26e",
  measurementId: "G-H06H4PHPZS",
};
firebase.initializeApp(firebaseConfig);

export default function ({ store }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.commit("setUser", user);
    } else {
      store.commit("setUser", null);
    }
  });
}
