import { useState } from "react"
import { getDeck } from "../async/getDeck"
import { Box } from "@mui/material"
import CardsContainer from "../components/CardsContainer"

export default function Home() {
  const [deckId, setDeckId] = useState(null)

  const handleClick = async(e) => {
    e.preventDefault()
    const deckData = await getDeck()
    const myDeckId = deckData.data.deck_id
    setDeckId(myDeckId)
  }

  return (
    <Box sx={{ backgroundColor: '#F3F8FB', width: '90vw', height: '100vh' }}>
          {deckId === null ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                height: '100%'
              }}>
              <button onClick={handleClick} style={{ backgroundColor: '#EBF1F8' }}>
                clickme
              </button>
            </Box>
          ) : (
            <CardsContainer deckId={deckId} />
          )}
        </Box>
  )
}
