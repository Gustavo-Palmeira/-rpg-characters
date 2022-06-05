import { SpeedDial as MuiSpeedDial, styled } from '@mui/material'

export const SpeedDial = styled(MuiSpeedDial)`
  position: fixed;
  z-index: 1000;
  bottom: 16px;
  right: 16px;

  button {
    background-color: #4a0607;

    &:hover {
      background-color: #4a0607;
    }
  }
`
