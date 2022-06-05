import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar sx={{ p: 2, background: '#4a0607' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <img src="d20.png" alt="RPG" width="48px" />
        <Typography variant="h5" component="h1" color="white">
          Personagens de RPG
        </Typography>
      </Box>
    </AppBar>
  )
}

export default Header
