import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import logger from 'redux-logger'
import gamesReducer from './reducers/games'
import Sagas from './sagas/games'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(gamesReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(Sagas.gamesSaga)

export default store
