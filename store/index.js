import "firebase/auth";
import firebase from "firebase/compat/app";
import items from "../data/items";
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
  },
};

export const actions = {
  async signup({ commit }, { email, password, userName }) {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password, userName);

      await user.updateProfile({
        displayName: userName,
        email: email,
      });

      commit("setUser", user);
    } catch (error) {
      this.$router.push("/");
    }
  },

  async login({ commit }, { email, password }) {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      commit("setUser", user);
    } catch (error) {
      this.$router.push("/");
    }
  },
  initItems({ commit }) {
    commit("setItems", items);
  },
};
