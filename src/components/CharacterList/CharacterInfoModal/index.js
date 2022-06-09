import React, { useContext } from 'react'
import { Box, CardContent, Divider, Typography } from '@mui/material'
import { Modal, Card } from './styles'
import { CharacterContext } from '../../../context/CharacterContext'
import { Image } from './styles'

const CharacterInfoModal = () => {
  const { currentCharacter, characterDispatch } = useContext(CharacterContext)

  const deselectCharacter = () => {
    characterDispatch({ type: 'DESELECT_CHARACTER' })
  }

  return (
    <Modal open={currentCharacter.isActive} onClose={deselectCharacter}>
      <Card>
        <Image
          src={currentCharacter.character.image}
          alt="Imagem"
          onError={({ currentTarget }) =>
            (currentTarget.src = '/default-image.png')
          }
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" component="h2">
              {currentCharacter.character.name}
            </Typography>
            <Typography
              sx={{
                background: '#4a0607',
                p: 1,
                borderRadius: 1,
                color: 'white',
              }}
            >
              {currentCharacter.character.class}
            </Typography>
          </Box>
          <Typography sx={{ color: '#444', mt: 2 }}>
            {currentCharacter.character.description}
          </Typography>
          <Typography sx={{ color: '#444', mt: 2 }}>
            {currentCharacter.character.background}
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <Typography
            sx={{ pt: 2 }}
          >{`"${currentCharacter.character.phrase}"`}</Typography>
        </CardContent>
      </Card>
    </Modal>
  )
}

export default CharacterInfoModal
