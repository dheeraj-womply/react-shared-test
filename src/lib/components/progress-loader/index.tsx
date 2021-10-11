import React from 'react'
import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(CircularProgress)`
  position: absolute;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
`

export const ProgressLoader: React.FC = (): JSX.Element => (
  <Container data-testid={'progress-loader'} />
)
