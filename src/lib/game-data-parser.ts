import { IGame, IGameGroup, IGameGroupDTO, ILobby, ILobbyDTO } from '../types'

export const getLobby = (lobbyName: string, data: Array<ILobby>): ILobbyDTO => {
  const lobby: ILobby = data.find((lobby) => {
    return lobby.name === lobbyName
  }) as ILobby

  const dto: ILobbyDTO = {
    name: lobbyName,
    sortedGroups: lobby.gameGroupList.sort((a, b) => {
      return (
        (((a.game_group_order as number) - b.game_group_order) as number) * -1
      )
    }),
  }

  return dto
}

export const getGameGroups = (
  lobby: ILobbyDTO,
  games: Array<IGame>
): Array<IGameGroupDTO> => {
  const gameGroups = new Array<IGameGroupDTO>()
  lobby.sortedGroups.forEach((group) => {
    const gameGroupDTO: IGameGroupDTO = {
      name: group.name,
      games: games
        .filter((game) => {
          return game.gameGroupList?.find(
            (gameGroup) => gameGroup.id === group.id
          )
        })
        .sort((a, b) => {
          return (a.displayOrder - b.displayOrder) * -1
        }),
    }
    gameGroups.push(gameGroupDTO)
  })
  return gameGroups
}
