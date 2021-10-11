import React from 'react'
import styled from 'styled-components'
import { WOMPLY_LOGO, WOMPLY_LOGO_RED } from '../../resources/images'

export const LogoWrapper = styled.div`
    padding: 20px;
    img {
        width: 137px;
        height: 27px;
    }
`
interface LogoProps {
    alt?: string
    variant?: 'default' | 'red'
}

export const Logo: React.FC<LogoProps> = ({ alt, variant = 'default' }) => (
    <LogoWrapper>
        <img src={variant === 'red' ? WOMPLY_LOGO_RED : WOMPLY_LOGO} alt={alt}/>
    </LogoWrapper>
)
