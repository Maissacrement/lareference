import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AppData } from 'src/type/appData';

const getters: GetterTree<AppData, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
