import Config from '../services/HttpService';
import {message} from 'antd';
import moment from 'moment';

import menu from './temp';

const { config, httpPost } = Config

export default {

  namespace: 'secondP',

  state: {
    list: [
      { key: 1, name: 'yzy', sex: 'male', age: 11 },
      { key: 2, name: 'ssb', sex: 'female', age: 12 }
    ],

    offset:0,
    total:10,
    size:10,
    current:1,

    menu:menu,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/secondP') {
          // dispatch({
          //   type: 'userPower',
          //   payload: {}
          // })
        }
      });
    },
  },

  effects: {
    // *userPower({ payload }, { call, put, select }) {
    //   const secondP = yield select(({ secondP }) => secondP)
    //   const data = yield call(indexRequests.userPower, {})
    //   var list = secondP.list
    //   list[1].name = data.data
    //   yield put({
    //     type: 'updatePayload',
    //     payload: {
    //       list
    //     }
    //   })
    // },
    * userPower({ payload }, { select, call, put }) {

      const secondP = yield select(({ secondP }) => secondP)

      const { data } = yield call(httpPost, config.WGjiekou, payload);

      var list = secondP.list
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
