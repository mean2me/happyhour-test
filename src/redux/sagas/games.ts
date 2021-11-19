import axios, { AxiosResponse } from 'axios'
import { all, put, call, takeLatest } from 'redux-saga/effects'
import { IGame, ILobby } from '../../typings'
import cfg from '../../utils/config'
import Actions from '../actions/games'
import API from '../../api/games'

namespace Sagas {
  function* fetchLobbies() {
    try {
      const data: AxiosResponse<Array<ILobby>> = yield call(API.getLobbies)
    } catch (error) {}
  }
}

export default Sagas
