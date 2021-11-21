import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import logger from 'redux-logger'
import gamesReducer from './reducers/games'
import Sagas from './sagas/games'

const sagaMiddleware = createSagaMiddleware()

const IS_PROD = process.env.NODE_ENV === 'production'

const store = createStore(
  gamesReducer,
  applyMiddleware(...(IS_PROD ? [sagaMiddleware] : [sagaMiddleware, logger]))
)

sagaMiddleware.run(Sagas.gamesSaga)

export type RootState = ReturnType<typeof gamesReducer>

export default store
