import { Module } from 'vuex';
import { StateInterface } from '../index';
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { AppData } from 'src/type/appData';

const exampleModule: Module<AppData, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;
