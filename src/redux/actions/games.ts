import { ActionType, IAction } from '../../typings'

namespace Actions {
  export const getLobbyListWithGameGroups = (): IAction => {
    return {
      type: ActionType.GET_LOBBY_LIST_WITH_GAME_GROUPS_REQUEST,
    }
  }

  export const getLobbyGameGroupGames = (): IAction => {
    return {
      type: ActionType.GET_LOBBY_GAME_GROUP_GAMES_REQUEST,
    }
  }
}

export default Actions
