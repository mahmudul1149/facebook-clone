import "firebase/auth";
import firebase from "firebase/compat/app";
import items from "../data/items";
export const state = () => ({
  items: null,
  user: null,
  posts: [],
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
  RESET_USER(state) {
    state.user = null;
    state.isLoggedIn = false;
  },
  addPost(state, post) {
    state.posts.unshift(post);
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
      });

      commit("setUser", user);
    } catch (error) {
      commit("RESET_USER");
      console.error(error);
      throw error;
    }
  },

  async login({ commit }, { email, password }) {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      commit("setUser", user);
    } catch (error) {
      commit("RESET_USER");
      console.error(error);
      throw error;
    }
  },
  async loggingOut({ commit }) {
    await firebase.auth().signOut();
    commit("setUser", null);
  },
  initItems({ commit }) {
    commit("setItems", items);
  },
};
