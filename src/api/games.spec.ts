import { expect } from 'chai'
import API from './games'

describe('Client API test', () => {
  it('Fetches lobbies endpoint', async () => {
    const resp = await API.getLobbies()
    expect(resp.status).to.equal(200)
    expect(resp.data).to.be.an('array')
  })
  it('Fetches games endpoint', async () => {
    const resp = await API.getGames()
    expect(resp.status).to.equal(200)
    expect(resp.data).to.be.an('array')
  })
})
