import axios from 'axios'

export const getDeck = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/'
  })
  return response
}
