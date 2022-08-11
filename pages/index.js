import { useState } from "react"
import { getDeck } from "../async/getDeck"
import { Box, Button } from "@mui/material"
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
    <Box sx={{
              backgroundColor: '#F3F8FB',
              width: '90vw',
              minHeight: '100vh',
              borderRadius:'10%',
              display:'flex',
              margin:'auto',
              border:'20px white double',
            }}>
          {deckId === null ? (
            <Box
              sx={{
                width:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
              }}>
              <Button  onClick={handleClick}  sx={{ backgroundColor: '#EBF1F8',width:'240px',height:'48px' }}>
                Start to Order Cards
              </Button>
            </Box>
          ) : (
            <CardsContainer deckId={deckId} />
          )}
        </Box>
  )
}
