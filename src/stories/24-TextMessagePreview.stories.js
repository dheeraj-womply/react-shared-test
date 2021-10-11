import React from "react";
import { text, withKnobs, boolean, number } from "@storybook/addon-knobs";
import {
  TextMessagePreview,
  PhoneFrameContentMessage,
} from "../lib/components/text-message-preview";
import * as faker from "faker";

export default {
  title: "Text Message Preview",
  component: TextMessagePreview,
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

const createRandomSingleMessage = (direction) => {
  const name = faker.name.findName();
  const url = faker.internet.url();
  const department = faker.commerce.department();
  const amount = faker.datatype.number({ min: 10, max: 100, precision: 0.25 });
  return {
    content:
      direction === "LEFT" ? (
        <div>
          {name} requests ${amount} for {department}. Pay via{" "}
          <a href={url}>{url}</a>
        </div>
      ) : (
        <span>
          Request is {faker.helpers.randomize(["approved", "rejected"])}.
        </span>
      ),
    direction,
  };
};

export const textMessagePreview = () => {
  const time = text("Time", "9:41");
  const day = text("Day", "Tuesday");
  const numberOfMessages = number("Number of Messages", 3, {
    range: true,
    min: 1,
    max: 10,
  });
  const hideMessageTime = boolean("Hide Message Time", false);
  const hideStatusBar = boolean("Hide Status Bar", false);
  const hideHeader = boolean("Hide Navigation Header", false);
  const fakeMessages = Array.from({ length: numberOfMessages }, (v, i) =>
    createRandomSingleMessage(i % 2 === 0 ? "LEFT" : "RIGHT")
  );

  return (
    <div style={{ background: "#f5f5f5", height: "100vh", padding: "2rem" }}>
      <TextMessagePreview
        time={time}
        day={day}
        hideHeader={hideHeader}
        hideStatusBar={hideStatusBar}
        hideMessageTime={hideMessageTime}
        messages={fakeMessages}
      />
    </div>
  );
};

export const textMessagePreviewWithChildren = () => {
  const time = text("Time", "9:41");
  const day = text("Day", "Tuesday");
  const numberOfMessages = number("Number of Messages", 3, {
    range: true,
    min: 1,
    max: 10,
  });
  const hideMessageTime = boolean("Hide Message Time", false);
  const hideStatusBar = boolean("Hide Status Bar", false);
  const hideHeader = boolean("Hide Navigation Header", false);
  const fakeMessages = Array.from({ length: numberOfMessages }, (v, i) =>
    createRandomSingleMessage(i % 2 === 0 ? "LEFT" : "RIGHT")
  );

  return (
    <div style={{ background: "#f5f5f5", height: "100vh", padding: "2rem" }}>
      <TextMessagePreview
        time={time}
        day={day}
        hideHeader={hideHeader}
        hideStatusBar={hideStatusBar}
        hideMessageTime={hideMessageTime}
      >
        {fakeMessages.map((message, index) => (
          <PhoneFrameContentMessage
            key={`message-frame-${index}`}
            sent={message.direction === "RIGHT"}
            backgroundColor={
              message.direction === "LEFT" ? "#e5e5ea" : "#007AFF"
            }
            style={{
              color: message.direction === "LEFT" ? "inherit" : "#fff",
            }}
          >
            {message.content}
          </PhoneFrameContentMessage>
        ))}
      </TextMessagePreview>
    </div>
  );
};
