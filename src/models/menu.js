import Config from '../services/HttpService';
import { message } from 'antd';
import moment from 'moment';
import menu from './temp';
const { config, httpPost } = Config

var selectedKeys = []

if (menu && menu.powers && menu.powers.length > 0) {
  if (!menu.powers[0].children || menu.powers[0].children.length == 0) {
    selectedKeys.push(String(menu.powers[0].code))
  } else {
    if (!menu.powers[0].children[0].children || menu.powers[0].children[0].children.length == 0) {
      selectedKeys.push(String(menu.powers[0].children[0].code))
    } else {
      selectedKeys.push(String(menu.powers[0].children[0].children[0].code))
    }
  }
}


export default {

  namespace: 'menu',

  state: {
    menu: menu,
    selectedKeys: sessionStorage.getItem('selectedKeys') ? [sessionStorage.getItem('selectedKeys')] : selectedKeys
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {

        }
      });
    },
  },

  effects: {
    * userPower({ payload }, { select, call, put }) {

      const menu = yield select(({ menu }) => menu)

      const { data } = yield call(httpPost, config.WGjiekou, payload);

      var list = menu.list
      list[1].name = data
      yield put({
        type: 'updatePayload',
        payload: {
          list
        }
      })
    },
  },

  reducers: {
    updatePayload(state, action) {
      return {
        ...state, ...action.payload,
      };
    },
    showLoading(state) {
      return { ...state, loading: true };
    },
    hideLoading(state) {
      return { ...state, loading: false };
    }
  },

};
