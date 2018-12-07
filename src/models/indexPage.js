import * as indexRequests from '../services/indexPage'

export default {

  namespace: 'indexPage',

  state: {
    list: [
      { key: 1, name: 'yzy', sex: 'male', age: 11 },
      { key: 2, name: 'ssb', sex: 'female', age: 12 }
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          console.log(111)
          dispatch({
            type: 'userPower',
            payload: {}
          })
        }
      });
    },
  },

  effects: {
    *userPower({ payload }, { call, put, select }) {
      const indexPage = yield select(({ indexPage }) => indexPage)
      const data = yield call(indexRequests.userPower, {})
      var list = indexPage.list
      list[1].name = data.data
      yield put({
        type: 'updatePayload',
        payload: {
          list
        }
      })
    }
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
