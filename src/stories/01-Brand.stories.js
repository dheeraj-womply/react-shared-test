import React from 'react';
import { DARK_GRAY_COLOR } from '../lib/themes/default-styles'
import { Logo } from '../lib/components'

export default {
    title: 'Brand',
    component: Logo
}

export const AppBrand = () => (
    <div style={{ display: 'inline-block', backgroundColor: DARK_GRAY_COLOR }}>
        <Logo alt="Womply Logo" />
    </div>
)

export const AppBrandRed = () => (
  <div style={{ display: 'inline-block', backgroundColor: DARK_GRAY_COLOR }}>
    <Logo alt="Womply Logo" variant="red" />
  </div>
)
