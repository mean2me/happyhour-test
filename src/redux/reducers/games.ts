import { DefaultRootState } from 'react-redux'
import { ActionType, IAction, IGamesState } from '../../types'

const initialState: IGamesState = {
  loading: false,
  lobbies: [],
  games: [],
}

export default (state = initialState, action: IAction): IGamesState => {
  switch (action.type) {
    case ActionType.GET_GAME_GROUP_LIST_REQUEST:
      state.loading = true
      break
    case ActionType.GET_GAME_GROUP_LIST_SUCCESS:
      state.loading = false
      break
    case ActionType.GET_GAME_GROUP_LIST_FAILURE:
      state.loading = false
      break
    case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_REQUEST:
      state.loading = true
      break
    case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_SUCCESS:
      state.loading = false
      break
    case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_FAILURE:
      state.loading = false
      break
  }

  return { ...state }
}
