import { AppData } from 'src/type/appData';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';

const actions: ActionTree<AppData, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
