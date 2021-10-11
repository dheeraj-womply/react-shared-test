import React from 'react'
import { ProgressLoader } from '../lib/components'

export default {
  title: 'Progress Loader',
  component: ProgressLoader,
}

export const progressLoader = () => {
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <ProgressLoader />
    </div>
  )
}