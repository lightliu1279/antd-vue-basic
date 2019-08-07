const state = {
  collapsed: false
};

const getters = {
  collapsed: state => state.collapsed
};

const mutations = {
  setCollapsed(state, collapsed) {
    state.collapsed = collapsed;
  }
};

const actions = {
  handleCollapsed({ commit }, collapsed) {
    commit('setCollapsed', collapsed);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
