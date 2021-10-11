import React from 'react'
import renderer from 'react-test-renderer'
import PageLayout from './index'
import { Logo } from '../brand'
import { Button } from '../button'

test('Page Layout', () => {
  const component = renderer.create(
    <PageLayout
      header={
        <Logo alt="Womply Logo" variant="red" />
      }
      mainTitle="Oops. Something went wrong."
      mainHeader="Please reload the page to try again."
      mainSubheader="If this problem persists, submit a support ticket by visiting womply.com/contact-us."
      footer={
        <div style={{ padding: '12px 32px' }}>
          Brought to you by Womply,  a San Francisco-based technology company.
        </div>
      }
    >
      <div style={{ flex:1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
        <Button size="large">
          Try Again
        </Button>
      </div>
    </PageLayout>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})