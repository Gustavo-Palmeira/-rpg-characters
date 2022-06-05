import { Box } from '@mui/material'
import { useContext } from 'react'
import CharacterList from './components/CharacterList'
import Header from './components/Header'
import { CharacterContext } from './context/CharacterContext'

function App() {
  const { currentCharacter } = useContext(CharacterContext)
  console.log(currentCharacter, 'currentCharacter')

  return (
    <>
      <Header sx={{ maxWith: '1400px' }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CharacterList />
      </Box>
    </>
  )
}

export default App
