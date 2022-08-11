import { Card, CardMedia } from '@mui/material'

const PokerCard = ({ image }) => {
  return (
    <Card sx={{ height: 'auto', width: '160px', boxShadow:3,backgroundColor: '#F3F8FB' }}>
      <CardMedia component="img" src={image} />
    </Card>
  )
}

export default PokerCard