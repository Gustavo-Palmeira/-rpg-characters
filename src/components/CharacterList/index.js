import { useSubscription } from '@apollo/client'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { LIST_CHARACTERS } from '../../graphql/subscriptions'
import CharacterModal from './CharacterModal'
import { Image, Card, CardContent } from './styles'
import FloatButton from '../FloatButton'
import { CharacterContext } from '../../context/CharacterContext'
import CharacterInfoModal from './CharacterInfoModal'

const CharacterList = () => {
  const { characterDispatch } = useContext(CharacterContext)
  const { data, loading, error } = useSubscription(LIST_CHARACTERS)
  const [characterModal, setCharacterModal] = useState(false)

  const selectCharacter = (character) => {
    characterDispatch({ type: 'SELECT_CHARACTER', payload: { character } })
  }

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 'calc(100vh - 80px)',
          mt: 8,
        }}
      >
        <CircularProgress sx={{ color: '#4a0607' }} />
      </Box>
    )
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
              <Card onClick={() => selectCharacter(character)}>
                <Image
                  src={character.image}
                  alt="Imagem"
                  onError={({ currentTarget }) =>
                    (currentTarget.src = '/default-image.png')
                  }
                />
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
      <CharacterModal
        characterModal={characterModal}
        setCharacterModal={setCharacterModal}
      />
      <CharacterInfoModal />
    </>
  )
}

export default CharacterList
