import React from "react";
import { create as renderer } from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";
import { Toggle } from "./index";

const tabs = [
  { id: "0", label: "SMS", content: <div>SMS Tab Content</div> },
  { id: "1", label: "Email", content: <div>Email Tab Content</div> },
  { id: "2", label: "Slack", content: <div>Slack Tab Content</div> },
];

describe("Slider Tabs Matches the snapshots", () => {
  it("renders correctly with single tab", () => {
    const component = renderer(<Toggle tabs={tabs.slice(0, 1)} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with single tab and children", () => {
    const component = renderer(
      <Toggle tabs={[{ id: "0", label: "SMS" }]}>
        <div>Children</div>
      </Toggle>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with multiple tab", () => {
    const component = renderer(<Toggle tabs={tabs.slice(0, 2)} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with multiple tab and other selected tab", () => {
    const component = renderer(
      <Toggle defaultSelected={"1"} tabs={tabs} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders nothing with no data", () => {
    const component = renderer(<Toggle tabs={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Slider Tabs component functionality is working", () => {
  beforeEach(() => {
    globalThis.HTMLElement.prototype.scrollBy = jest.fn();
    globalThis.HTMLElement.prototype.scrollTo = jest.fn();
  });

  it("renders correctly with no data", () => {
    const { container } = render(<Toggle tabs={[]} />);
    expect(container.innerHTML).toHaveLength(0);
  });

  it("renders correctly with default selected tab", () => {
    const { queryByTestId, getByTestId } = render(<Toggle hideArrows tabs={tabs} />);
    const sliderTabsContent = queryByTestId("slider-tabs-content");
    expect(sliderTabsContent).toHaveTextContent("SMS Tab Content");
    const input1 = getByTestId("input-1");
    fireEvent.click(input1);
    expect(queryByTestId("left-arrow")).toBeFalsy();
    expect(queryByTestId("right-arrow")).toBeFalsy();
  });

  it("renders correctly with data", () => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true, value: 943
    });
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
      configurable: true, value: 1099
    });
    Object.defineProperty(HTMLElement.prototype, 'scrollLeft', {
      configurable: true, value: 10
    });
    const onTabChange = jest.fn();
    const { getByTestId } = render(
      <Toggle
        onTabChange={onTabChange}
        defaultSelected={"1"}
        tabs={Array.from({ length: 25 }, (v, i) => ({
          id: `${i}`,
          label: `Tab ${i}`,
          content: <div>Tab {i} Content</div>,
        }))}
      />
    );
    const sliderTabsContent = getByTestId("slider-tabs-content");
    expect(sliderTabsContent).toHaveTextContent("Tab 1 Content");
    const input0 = getByTestId("input-0");
    fireEvent.click(input0);
    expect(onTabChange).toBeCalled();
    expect(sliderTabsContent).toHaveTextContent("Tab 0 Content");
    const rightArrow = getByTestId("right-arrow");
    fireEvent.click(rightArrow);
    const leftArrow = getByTestId("left-arrow");
    fireEvent.click(leftArrow);
  });

  it("renders correctly with data and ref as null", () => {
    const { getByTestId } = render(
      <Toggle
        defaultSelected={"1"}
        tabs={Array.from({ length: 25 }, (v, i) => ({
          id: `${i}`,
          label: `Tab ${i}`,
          content: <div>Tab {i} Content</div>,
        }))}
      />
    );
    jest.spyOn(React, "useRef").mockReturnValue({ current: null });
    const input0 = getByTestId("input-0");
    fireEvent.click(input0);
  });
});
