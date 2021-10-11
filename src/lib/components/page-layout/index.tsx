import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useTheme } from "@material-ui/core";

const pageHeight = globalThis?.screen?.orientation?.angle ? globalThis?.innerWidth : globalThis?.innerHeight
const minHeight = pageHeight ? pageHeight + 'px' : '100vh'

const Layout = styled.div`
  ${({ theme }) => `
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${theme.breakpoints.down('xs')} {
      padding: 0 2rem;
      min-height: ${minHeight};
    };
  `}
`

const Header = styled.header`
  flex: 0 1 auto;
  align-self: stretch;
`

const LayoutContent = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  max-width: 375px;
`

const Footer = styled.footer`
  flex: 0 1 auto;
  align-self: stretch;
`

const TextCenter = styled.div`
  text-align: center;
`

export interface PageLayoutProps {
  header?: React.ReactNode
  mainTitle?: React.ReactNode
  mainHeader?: React.ReactNode
  mainSubheader?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  mainTitle,
  mainHeader,
  mainSubheader,
  children,
  footer,
}): JSX.Element => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        { header && <Header>{header}</Header>}
        <LayoutContent>
          {mainTitle && <TextCenter>{mainTitle}</TextCenter>}
          {mainHeader && <TextCenter>{mainHeader}</TextCenter>}
          {mainSubheader && <TextCenter>{mainSubheader}</TextCenter>}
          { children }
        </LayoutContent>
        { footer && <Footer>{footer}</Footer>}
      </Layout>
    </ThemeProvider>
  )
}

export default PageLayout
