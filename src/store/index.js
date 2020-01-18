import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

import allReducers from '../reducers/operations'

const sagaMiddleware = createSagaMiddleware()

export default store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)