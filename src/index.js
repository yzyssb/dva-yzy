import dva, { connect } from 'dva';
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading'
import { message } from 'antd'
import './index.css';

const ERROR_MSG_DURATION = 3

// 1. Initialize
// const app = dva({
//   history: createHistory(),
//   ...createLoading({ effects: true }),
//   initialState: {
//       '@@dva': {
//           c: 123,
//           b: 321
//       }
//   },
//   onError(e, dispatch) {
//       message.error(e.message, ERROR_MSG_DURATION)
//   },
//   onStateChange(state) {
//       // console.log(state)
//   }
// })
const app=dva()

// 2. Plugins
app.use(createLoading({ effects: true }));

// 3. Model
// app.model(require('./models/indexPage').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
