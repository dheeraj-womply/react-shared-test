/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Toggle } from "../lib/components/toggle";
import {
  withKnobs,
  number,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import * as faker from "faker";

export default {
  title: "Toggle",
  component: Toggle,
  decorators: [withKnobs],
};

export const toggle = () => {
  const scrollAmount = number("Scroll Amount", 200, {
    range: true,
    min: 100,
    max: 2000,
  });
  const hideArrows = options(
    "Hide Arrows",
    { true: true, false: false },
    false,
    { display: "select" }
  );
  const containerWidth = number("Container Width", 60, {
    range: true,
    min: 15,
    max: 100,
  });
  const tabsNumbers = number("Number of Tabs", 5, {
    range: true,
    min: 0,
    max: 50,
  });
  const tabsLabels = Array.from({ length: tabsNumbers }, (v, i) =>
    text(`Label of Tab ${i + 1}`, faker.name.title())
  );

  return (
    <div
      style={{
        width: `${containerWidth}vw`,
        height: "60vh",
        margin: "auto",
        marginTop: "10vh",
      }}
    >
      <Toggle
        scrollAmount={scrollAmount}
        hideArrows={!!hideArrows}
        tabs={Array.from({ length: tabsNumbers }, (v, i) => ({
          id: `${i}`,
          label: tabsLabels[i],
          content: <div>{faker.lorem.paragraphs(5).split('\n').map((str, i) => <p key={i}>{str}</p>)}</div>,
        }))}
      />
    </div>
  );
};

export const toggleControlled = () => {
  const tabsNumbers = number("Number of Tabs", 3, { min: 0, max: 10 });
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div
      style={{
        width: "60vw",
        height: "60vh",
        margin: "auto",
        marginTop: "10vh",
      }}
    >
      <Toggle
        hideArrows
        onTabChange={setActiveTab}
        defaultSelected={"1"}
        tabs={Array.from({ length: tabsNumbers }, (v, i) => ({
          id: `${i}`,
          label: `Tab ${i + 1}`,
          content: <div>Tab {i + 1} Content</div>,
        }))}
      >
        {activeTab === "0" ? (
          <div>Tab 1 Content Controlled</div>
        ) : (
          <div>Tab {parseInt(activeTab) + 1} Content Controlled</div>
        )}
      </Toggle>
    </div>
  );
};
