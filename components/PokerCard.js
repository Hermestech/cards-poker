import { Card, CardMedia } from '@mui/material'

const PokerCard = ({ image }) => {
  return (
    <Card sx={{ height: { xs: '30%', md: '300px' }, width: '160px', background: 'red' }}>
      <CardMedia component="img" src={image} />
    </Card>
  )
}

export default PokerCard