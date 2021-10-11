import React from "react"
import renderer from "react-test-renderer"
import { ContentCard } from "./ui-elements"
import { render } from "@testing-library/react";

test('Content Card elements are OK', () => {
    const component = renderer.create(
        <ContentCard>
            <p>Womply</p>
        </ContentCard>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Content Card has title', () => {
    const cardTitle = "Overview"
    const { getByText } = render(
        <ContentCard title={cardTitle}>
            <p>Womply</p>
        </ContentCard>
    )

    expect(getByText(cardTitle)).toBeInTheDocument()
})