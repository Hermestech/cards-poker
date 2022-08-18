import { useState, useRef,useEffect } from 'react'
import { getCard } from '../async/getCard'
import PokerCard from './PokerCard'
import { Box } from '@mui/material'
import { CardsContainerStyles } from './CardsContainerStyles'

const cardsValue = {
  ACE: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  JACK: 10,
  QUEEN: 11,
  KING: 12
}

function sortCards(array) {
  return array.sort((a, b) => cardsValue[a.value] - cardsValue[b.value])
}

const CardsContainer = ({ deckId }) => {
  const [allCards, setAllCards] = useState([])
  const clubs = useRef([])
  const diamonds = useRef([])
  const hearts = useRef([])
  const spades = useRef([])
  const foundQueens = useRef(0)


  const arrangeCards = async (myCard) => {
    if (myCard.suit === 'CLUBS') {
      clubs.current = sortCards([...clubs.current, myCard])
      //   setClubs((current) => sortCards([...current, myCard]))
    }
    if (myCard.suit === 'DIAMONDS') {
      diamonds.current = sortCards([...diamonds.current, myCard])
      //   setDiamonds((current) => sortCards([...current, myCard]))
    }
    if (myCard.suit === 'HEARTS') {
      hearts.current = sortCards([...hearts.current, myCard])
      //   setHearts((current) => sortCards([...current, myCard]))
    }
    if (myCard.suit === 'SPADES') {
      spades.current = sortCards([...spades.current, myCard])
      //   setSpades((current) => sortCards([...current, myCard]))
    }
    if (myCard.value === 'QUEEN') {
      const newFoundQueens = foundQueens.current + 1
      foundQueens.current = newFoundQueens
    }
    setAllCards((current) => [...current, myCard])
  }

  useEffect(() => {
    if (allCards.length < 52 && foundQueens.current < 4) {
      getCard(deckId).then((mycard) => {
        setTimeout(() => {
          arrangeCards(mycard)
        }, 2000)
      })
    }
  }, [allCards.length])

  const mapDataToCard = (cards) =>
    cards.map((card,i) => (
        <PokerCard image={card.image} key={i}/>
    ))
  return (
    <Box width="100%" sx={{display:'grid',
     gridTemplateColumns:'repeat(2,1fr)',
     gridTemplateRows:'repeat(2,1fr)',
     gridTemplateAreas:`
     'upperLeft upperRight'
     'bottomLeft bottomRight'
     `,
     gap:'16px'

     }}   >
      <Box sx={{display:'flex',flexWrap:'wrap', gridArea:'upperLeft'}}>
        {mapDataToCard(clubs.current)}
      </Box>
      <Box sx={{display:'flex',flexWrap:'wrap',gridArea:'upperRight'}} >
        {mapDataToCard(diamonds.current)}
      </Box>
      <Box sx={{display:'flex',flexWrap:'wrap',gridArea:'bottomLeft'}}>
        {mapDataToCard(hearts.current)}
      </Box>
      <Box sx={{display:'flex',flexWrap:'wrap',gridArea:'bottomRight'}}>
        {mapDataToCard(spades.current)}
      </Box>
    </Box>
  )
}

export default CardsContainer