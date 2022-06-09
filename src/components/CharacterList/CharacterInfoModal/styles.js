import {
  Card as MuiCard,
  Modal as MuiModal,
  styled,
} from '@mui/material'

export const Modal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled(MuiCard)`
  margin: 20px;
  width: 60%;
  overflow-y: auto;
  height: 90vh;
`

export const Image = styled('img')`
  width: 100%;
  height: 200px;
  object-fit: cover;
`
