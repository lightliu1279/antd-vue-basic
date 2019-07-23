import Nprogress from 'nprogress';

const state = {
  progress: false
};

const getters = {
  progress: state => state.progress
};

const mutations = {
  setProgress(state, status) {
    state.progress = status;
  }
};

const actions = {
  handleProgress({ state, commit }, status) {
    switch (status) {
      case true:
        if (!state.progress) {
          commit('setProgress', status);
          Nprogress.start();
        }
        break;
      case false:
        commit('setProgress', status);
        Nprogress.done();
        break;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
