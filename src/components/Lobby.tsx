import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IGame, IGameGroupDTO, ILobby, ILobbyDTO, ScreenSize } from '../types'
import { RootState } from '../redux/store'
import { getLobby, getGameGroups } from '../lib/game-data-parser'
import Actions from '../redux/actions/games'
import GameGroup from './GameGroup'
import { useMediaQuery } from '../hooks'

const Lobby = () => {
  const [lobby, setLobby] = useState<ILobbyDTO | null>(null)
  const [gamesGroups, setGamesGroups] = useState<IGameGroupDTO[]>([])
  const [screenSize, setScreenSize] = useState<ScreenSize | null>(null)
  const lobbies: ILobby[] = useSelector((state: RootState) => state.lobbies)
  const games: IGame[] = useSelector((state: RootState) => state.games)
  const dispatch = useDispatch()

  const isMobile = useMediaQuery('only screen and (max-width: 667px)')
  const isTablet = useMediaQuery(
    'only screen and (min-width: 668px) and (max-width: 1024px)'
  )

  const isDesktop = useMediaQuery('only screen and (min-width: 1025px)')

  useEffect(() => {
    if (lobbies && lobbies.length > 0) {
      const casino: ILobbyDTO = getLobby('casino', lobbies)
      if (casino) {
        setLobby(casino)
      }
    } else {
      dispatch(Actions.getLobbyListWithGameGroups())
    }
  }, [lobbies])

  useEffect(() => {
    if (games && games.length > 0) {
      const groups: IGameGroupDTO[] = getGameGroups(lobby as ILobbyDTO, games)
      setGamesGroups(groups)
    } else {
      dispatch(Actions.getLobbyGameGroupGames())
    }
  }, [games, lobby])

  useEffect(() => {
    if (isDesktop) setScreenSize(ScreenSize.DESKTOP)
    if (isMobile) setScreenSize(ScreenSize.MOBILE)
    if (isTablet) setScreenSize(ScreenSize.TABLET)
  }, [isDesktop, isMobile, isTablet])

  return (
    <div className="lobby-wrapper">
      <h1>{lobby?.name ? lobby.name : '...loading lobby'}</h1>
      {gamesGroups
        .filter((g) => g.games.length > 0)
        .map((group) => (
          <div className="game-group">
            <h2>{group.name}</h2>
            <div>
              {screenSize && (
                <GameGroup gameGroup={group} screenSize={screenSize} />
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Lobby
