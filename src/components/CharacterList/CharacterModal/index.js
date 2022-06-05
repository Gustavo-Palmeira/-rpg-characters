import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Modal, Card } from './styles'

const CharacterModal = ({ characterModal, setCharacterModal }) => {
  const [modalOpen, setModalOpen] = useState(characterModal)

  useEffect(() => {
    setModalOpen(characterModal)
  }, [characterModal])

  return (
    <Modal open={modalOpen} onClose={() => setCharacterModal(false)}>
      <Card>
        <Typography>Nome</Typography>
      </Card>
    </Modal>
  )
}

export default CharacterModal
