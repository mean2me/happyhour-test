import { AxiosResponse } from 'axios'
import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { ActionType, IAction, IGame, ILobby } from '../../typings'
import API from '../../api/games'
import Actions from '../actions/games'

namespace Sagas {
  function* fetchLobbies() {
    try {
      const resp: AxiosResponse<Array<ILobby>> = yield call(API.getLobbies)
      if (resp.status === 200) {
        yield put(Actions.getLobbyListWithGameGroupsSuccess(resp.data))
      } else {
        yield put(Actions.getLobbyListWithGameGroupsFailure(resp.statusText))
      }
    } catch (error) {
      yield put(
        Actions.getLobbyListWithGameGroupsFailure(JSON.stringify(error))
      )
    }
  }

  function* fetchGames() {
    try {
      const resp: AxiosResponse<Array<IGame>> = yield call(API.getGames)
      if (resp.status === 200) {
        yield put(Actions.getLobbyGameGroupGamesSuccess(resp.data))
      } else {
        yield put(Actions.getLobbyGameGroupGamesFailure(resp.statusText))
      }
    } catch (error) {
      yield put(Actions.getLobbyGameGroupGamesFailure(JSON.stringify(error)))
    }
  }

  export function* gamesSaga() {
    yield all([
      takeEvery(
        [
          ActionType.GET_GAME_GROUP_LIST_REQUEST,
          ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_REQUEST,
        ],
        function* (action: IAction) {
          switch (action.type) {
            case ActionType.GET_GAME_GROUP_LIST_REQUEST:
              yield fetchGames()
              break
            case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_REQUEST:
              yield fetchLobbies()
              break
          }
        }
      ),
    ])
  }
}

export default Sagas
