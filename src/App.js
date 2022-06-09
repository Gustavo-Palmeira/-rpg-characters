import { Box } from '@mui/material'
import CharacterList from './components/CharacterList'
import Header from './components/Header'

function App() {
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
