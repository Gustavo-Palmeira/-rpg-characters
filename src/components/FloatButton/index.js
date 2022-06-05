import { PersonAdd } from '@mui/icons-material'
import { SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import { SpeedDial } from './styles'

const FloatButton = ({ setCharacterModal }) => {
  return (
    <SpeedDial ariaLabel="Nova ação" icon={<SpeedDialIcon />}>
      <SpeedDialAction
        icon={<PersonAdd sx={{ fill: 'white' }} />}
        tooltipTitle="Novo personagem"
        onClick={() => setCharacterModal(true)}
      />
    </SpeedDial>
  )
}

export default FloatButton
