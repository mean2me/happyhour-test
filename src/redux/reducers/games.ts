import { ActionType, IAction, IGamesState } from '../../typings'

const initialState: IGamesState = {
  loading: false,
  lobbies: [],
  games: [],
}

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionType.GET_GAME_GROUP_LIST_REQUEST:
      break
    case ActionType.GET_GAME_GROUP_LIST_RESPONSE:
      break
    case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_REQUEST:
      break
    case ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_RESPONSE:
      break
  }

  return { ...state }
}
