import { keyframes } from '@mui/material'

import {
  Card as MuiCard,
  CardContent as MuiCardCOntent,
  styled,
} from '@mui/material'

const scaleUp = keyframes`
  0% { transform: scale(1) }
  100% { transform: scale(1.02) }
`

export const Image = styled('img')`
  width: 100%;
  height: 100px;
  object-fit: cover;
`

export const Card = styled(MuiCard)`
  margin-top: 12px;
  cursor: pointer;

  &:hover {
    animation: ${scaleUp} 0.4s forwards;
  }
`

export const CardContent = styled(MuiCardCOntent)`
  padding: 12px;
`
