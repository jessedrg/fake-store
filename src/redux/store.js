import {createStore} from 'redux'
import reducers from '../redux/reducers/Index'

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;