import { useSubscription } from '@apollo/client'
import { Box, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LIST_CHARACTERS } from '../../graphql/subscriptions'
import CharacterModal from './CharacterModal'
import { Image, Card, CardContent } from './styles'
import FloatButton from '../FloatButton'

const CharacterList = () => {
  const { data, loading, error } = useSubscription(LIST_CHARACTERS)
  console.log(data?.character, 'DATA')
  const [characterModal, setCharacterModal] = useState(false)

  if (loading) {
    return <LinearProgress />
  }
  if (error) {
    return <Typography>{error}</Typography>
  }
  return (
    <>
      <Box sx={{ m: 8, mt: 14, display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          {data?.character.map((character) => (
            <Grid item xs={12} md={6} key={character.id}>
              <Card>
                <Image src={character.image} alt="Imagem" />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {character.name}
                  </Typography>
                  <Typography sx={{ pt: 2 }}>{`${
                    character.description.length > 120
                      ? character.description.substring(0, 140) + '...'
                      : character.description
                  }`}</Typography>
                  <Typography
                    color="GrayText"
                    sx={{
                      pt: 2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >{`"${character.phrase}"`}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <FloatButton setCharacterModal={setCharacterModal} />
      </Box>
      <CharacterModal characterModal={characterModal} setCharacterModal={setCharacterModal} />
    </>
  )
}

export default CharacterList
