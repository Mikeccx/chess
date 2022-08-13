import { createStore, compose, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk';
const middlewareList = [thunk];

const composeEnhancers =
  ((window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose; // eslint-disable-line
const enhancers = composeEnhancers(applyMiddleware(...middlewareList));
const store = createStore(reducer, enhancers)
export default createStore(reducer, enhancers)