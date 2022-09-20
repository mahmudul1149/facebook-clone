import items from "../data/items";
export const state = () => ({
  items: null,
  user: [],
});

export const getters = {
  items(state) {
    return state.items;
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
};
