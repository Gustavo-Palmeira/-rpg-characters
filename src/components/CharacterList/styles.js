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

  @media (max-width: 768px) {
    width: 500px;
    margin: auto;
  }

  @media (max-width: 520px) {
    width: 300px;
    margin: auto;
  }
`

export const CardContent = styled(MuiCardCOntent)`
  padding: 12px;
  min-height: 140px;
`
