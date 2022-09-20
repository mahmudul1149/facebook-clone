import items from "../data/items";
import firebase from "firebase/compat/app";
export const state = () => ({
  items: null,
  user: [],
});

export const getters = {
  items(state) {
    return state.items;
  },
  isUserAuth(state) {
    return !state.user;
  },
};

export const mutations = {
  setItems(state) {
    state.items = items;
  },
  setUser(state, user) {
    state.user = user;
    localStorage.setItem("userdata", JSON.stringify(state.user));
  },
  initializeStore(state) {
    if (localStorage.getItem("userdata")) {
      state.user = JSON.parse(localStorage.getItem("userdata"));
    } else {
      localStorage.setItem("userdata", JSON.stringify(state.user));
    }
  },
};

export const actions = {
  initItems({ commit }) {
    // make request
    commit("setItems", items);
  },
  authAction({ commit }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        commit("setUser", user);
      } else {
        commit("setUser", null);
      }
    });
  },
};
