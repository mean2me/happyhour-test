import axios, { AxiosResponse } from 'axios'
import { IGame, ILobby } from '../types'
import cfg from '../utils/config'

namespace API {
  export const getLobbies = (): Promise<AxiosResponse<Array<ILobby>>> => {
    return axios.get<Array<ILobby>>(
      `${cfg.ENDPOINT_URL}/ajax/game/getLobbyListWithGameGroups`,
      {
        params: {
          languageId: cfg.LANG,
        },
      }
    )
  }

  export const getGames = (): Promise<AxiosResponse<Array<IGame>>> => {
    return axios.get<Array<IGame>>(
      `${cfg.ENDPOINT_URL}/ajax/game/getLobbyGameGroupGames`,
      {
        params: {
          languageId: cfg.LANG,
        },
      }
    )
  }
}

export default API
