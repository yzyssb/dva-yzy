import Config from '../services/HttpService';
import {message} from 'antd';
import moment from 'moment';
const { config, httpPost } = Config

export default {

  namespace: 'indexP',

  state: {
    list: [
      { key: 1, name: 'yzy', sex: 'male', age: 11 },
      { key: 2, name: 'ssb', sex: 'female', age: 12 }
    ],

    offset:0,
    total:10,
    size:10,
    current:1,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({
            type: 'userPower',
            payload: {}
          })
          var tt=moment().startOf('day')
          console.log( new Date(tt) )
          message.success(String(new Date(tt)))
        }
      });
    },
  },

  effects: {
    // *userPower({ payload }, { call, put, select }) {
    //   const indexP = yield select(({ indexP }) => indexP)
    //   const data = yield call(indexRequests.userPower, {})
    //   var list = indexP.list
    //   list[1].name = data.data
    //   yield put({
    //     type: 'updatePayload',
    //     payload: {
    //       list
    //     }
    //   })
    // },
    * userPower({ payload }, { select, call, put }) {

      const indexP = yield select(({ indexP }) => indexP)

      const { data } = yield call(httpPost, config.WGjiekou, payload);

      var list = indexP.list
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
