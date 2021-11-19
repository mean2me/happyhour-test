import { ActionType, IAction, IGame, ILobby } from '../../typings'

namespace Actions {
  export const getLobbyListWithGameGroups = (): IAction => {
    return {
      type: ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_REQUEST,
    }
  }

  export const getLobbyListWithGameGroupsSuccess = (
    payload: Array<ILobby>
  ): IAction => {
    return {
      type: ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_SUCCESS,
      payload,
    }
  }

  export const getLobbyListWithGameGroupsFailure = (error: string): IAction => {
    return {
      type: ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_FAILURE,
      payload: error,
    }
  }

  export const getLobbyGameGroupGames = (): IAction => {
    return {
      type: ActionType.GET_GAME_GROUP_LIST_REQUEST,
    }
  }

  export const getLobbyGameGroupGamesSuccess = (
    payload: Array<IGame>
  ): IAction => {
    return {
      type: ActionType.GET_GAME_GROUP_LIST_SUCCESS,
      payload,
    }
  }

  export const getLobbyGameGroupGamesFailure = (error: string): IAction => {
    return {
      type: ActionType.GET_GAME_GROUP_LIST_FAILURE,
      payload: error,
    }
  }
}

export default Actions
