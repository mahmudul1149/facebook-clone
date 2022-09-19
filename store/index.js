import items from "../data/items";
export const state = () => ({
  items: null,
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
};

export const actions = {
  initItems({ commit }) {
    // make request
    commit("setItems", items);
  },
};
