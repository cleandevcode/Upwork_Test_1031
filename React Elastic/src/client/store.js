import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from '../client/Store/reducers';
const ReduxStore = createStore(RootReducer, {}, applyMiddleware(ReduxThunk));

export default ReduxStore;
