import React from "react"
import renderer from "react-test-renderer"
import { Pagination } from "./index"

test('Pagination with First, Last, Previous & Next button enabled', () => {
  const component = renderer.create(
    <Pagination
      count={10}
      showFirstButton
      showLastButton
      hideNextButton={false}
      hidePrevButton={false}
      variant="outlined"
      shape="rounded"
      color="primary"
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Pagination with First & Last button hidden', () => {
  const component = renderer.create(
    <Pagination
      count={10}
      showFirstButton={false}
      showLastButton={false}
      hideNextButton={false}
      hidePrevButton={false}
      variant="outlined"
      shape="rounded"
      color="primary"
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Pagination with First, Last, Previous & Next button hidden', () => {
  const component = renderer.create(
    <Pagination
      count={10}
      showFirstButton={false}
      showLastButton={false}
      hideNextButton={true}
      hidePrevButton={true}
      variant="outlined"
      shape="rounded"
      color="primary"
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})