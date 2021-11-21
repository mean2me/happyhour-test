import { expect } from 'chai'
import API from '../api/games'
import { getLobby, getGameGroups } from './game-data-parser'

describe('Manages data API', function () {
  it('Reduces lobbies data', async function () {
    const resp = await API.getLobbies()
    const dtos = getLobby('casino', resp.data)

    expect(dtos.name).to.equal('casino')
    expect(dtos.sortedGroups[0].game_group_order).to.be.greaterThan(
      dtos.sortedGroups[1].game_group_order
    )
  })

  it('Prepare games group data', async () => {
    const resp = await API.getLobbies()
    const gamesResp = await API.getGames()
    const dtos = getLobby('casino', resp.data)
    const gameGroupsDTO = getGameGroups(dtos, gamesResp.data)
    expect(gameGroupsDTO).to.have.length.greaterThan(0)
    expect(gameGroupsDTO[1].games).to.have.length.greaterThan(1)
    expect(gameGroupsDTO[1].games[0].displayOrder).to.be.greaterThanOrEqual(
      gameGroupsDTO[1].games[1].displayOrder
    )
  })
})
