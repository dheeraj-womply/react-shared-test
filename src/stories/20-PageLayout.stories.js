import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { text, withKnobs } from '@storybook/addon-knobs'
import PageLayout from '../lib/components/page-layout'
import { Logo } from '../lib/components'
import { Button } from '../lib/components'
import muiTheme from '../lib/themes/material'

export default {
  title: 'PageLayout',
  component: PageLayout,
  decorators: [withKnobs],
}

export const PageLayoutWithText = () => (
  <ThemeProvider theme={muiTheme}>
    <PageLayout
      header={
        <div style={{ textAlign: 'center' }}>
          <Logo alt="Womply Logo" variant="red" />
        </div>
      }
      mainTitle={text('main title', 'Oops. Something went wrong.')}
      mainHeader={text('main header', 'Please reload the page to try again.')}
      mainSubheader={text('main sub header', 'If this problem persists, submit a support ticket by visiting womply.com/contact-us.')}
      footer={
        <div style={{ padding: '12px 0', textAlign: 'center' }}>
          {text('footer', 'Brought to you by Womply,  a San Francisco-based technology company.')}
        </div>
      }
    >
      <div style={{ flex:1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
        <Button size="large">
          {text('try again', 'Try Again')}
        </Button>
      </div>
    </PageLayout>
  </ThemeProvider>
)

export const PageLayoutWithJSX = () => (
  <ThemeProvider theme={muiTheme}>
    <PageLayout
      header={
        <div style={{ textAlign: 'center' }}>
          <Logo alt="Womply Logo" variant="red" />
        </div>
      }
      mainTitle={
        <div>
          {text('main title', 'Oops. Something went wrong.')}
        </div>
      }
      mainHeader={
        <div>
          {text('main header', 'Please reload the page to try again.')}
        </div>
      }
      mainSubheader={
        <>
          <div>
            {text('main sub header', 'If this problem persists, submit a support ticket by visiting ')}
            <a href={text('contact url', '#')}>
              {text('contact us', 'womply.com/contact-us')}
            </a>
            .
          </div>
        </>
      }
      footer={
        <div style={{ padding: '12px 0', textAlign: 'center' }}>
          {text('footer', 'Brought to you by Womply,  a San Francisco-based technology company.')}
        </div>
      }
    >
      <div style={{ flex:1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
        <Button size="large">
          {text('try again', 'Try Again')}
        </Button>
      </div>
    </PageLayout>
  </ThemeProvider>
)

export const PageLayoutWithoutHeader = () => (
  <ThemeProvider theme={muiTheme}>
    <PageLayout
      mainTitle={text('main title', 'Oops. Something went wrong.')}
      mainHeader={text('main header', 'Please reload the page to try again.')}
      mainSubheader={text('main sub header', 'If this problem persists, submit a support ticket by visiting womply.com/contact-us.')}
      footer={
        <div style={{ padding: '12px 0', textAlign: 'center' }}>
          {text('footer', 'Brought to you by Womply,  a San Francisco-based technology company.')}
        </div>
      }
    >
      <div style={{ flex:1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
        <Button size="large">
          {text('try again', 'Try Again')}
        </Button>
      </div>
    </PageLayout>
  </ThemeProvider>
)

export const PageLayoutWithoutFooter = () => (
  <ThemeProvider theme={muiTheme}>
    <PageLayout
      header={
        <div style={{ textAlign: 'center' }}>
          <Logo alt="Womply Logo" variant="red" />
        </div>
      }
      mainTitle={text('main title', 'Oops. Something went wrong.')}
      mainHeader={text('main header', 'Please reload the page to try again.')}
      mainSubheader={text('main sub header', 'If this problem persists, submit a support ticket by visiting womply.com/contact-us.')}
    >
      <div style={{ flex:1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
        <Button size="large">
          {text('try again', 'Try Again')}
        </Button>
      </div>
    </PageLayout>
  </ThemeProvider>
)

export const PageLayoutWithoutMainheader = () => (
  <ThemeProvider theme={muiTheme}>
    <PageLayout
      header={
        <div style={{ textAlign: 'center' }}>
          <Logo alt="Womply Logo" variant="red" />
        </div>
      }
      mainTitle={text('main title', 'Oops. Something went wrong.')}
      mainSubheader={text('main sub header', 'If this problem persists, submit a support ticket by visiting womply.com/contact-us.')}
      footer={
        <div style={{ padding: '12px 0', textAlign: 'center' }}>
          {text('footer', 'Brought to you by Womply,  a San Francisco-based technology company.')}
        </div>
      }
    >
      <div style={{ flex:1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
        <Button size="large">
          {text('try again', 'Try Again')}
        </Button>
      </div>
    </PageLayout>
  </ThemeProvider>
)