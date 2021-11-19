import { ActionType, IAction, IGamesState } from '../../types'

const initialState: IGamesState = {
  loading: false,
  lobbies: [],
  games: [],
}

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionType.GET_GAME_GROUP_LIST_REQUEST:
      break
    case ActionType.GET_GAME_GROUP_LIST_SUCCESS:
      break
    case ActionType.GET_GAME_GROUP_LIST_FAILURE:
      break
    case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_REQUEST:
      break
    case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_SUCCESS:
      break
    case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_FAILURE:
      break
  }

  return { ...state }
}
