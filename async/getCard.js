import axios from 'axios'

export const getCards = async (deckId) => {
  const response = await axios({
    method: 'get',
    url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  })
  return response
}

export const getCard = async (deckId) => {
  const response = await getCards(deckId)
  let [myCard] = response.data.cards
  return myCard
}
