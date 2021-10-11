import React from "react";
import { create as renderer } from "react-test-renderer";
import { render } from "@testing-library/react";
import { TextMessagePreview } from "./index";

describe("Text Message Preview Tests", () => {
  it("renders correctly", () => {
    const component = renderer(
      <TextMessagePreview
        messages={[
          {
            content: (
              <div>
                Fiesta Mexicana requests $160.95 for Dinner - Custom. Pay via{" "}
                <a href="https://pay.xyz/fiestamexicana">
                  https://pay.xyz/fiestamexicana
                </a>
              </div>
            ),
          },
        ]}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with all props", () => {
    const component = renderer(
      <TextMessagePreview
        time="10:41"
        day={"Sunday"}
        messages={[
          {
            content: (
              <div>
                Fiesta Mexicana requests $160.95 for Dinner - Custom. Pay via{" "}
                <a href="https://pay.xyz/fiestamexicana">
                  https://pay.xyz/fiestamexicana
                </a>
              </div>
            ),
          },
        ]}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Text Message Preview Tests with data", () => {
  it("render correctly with data", () => {
    const { rerender, getByTestId } = render(
      <TextMessagePreview
        messages={[
          {
            content: (
              <div>
                Fiesta Mexicana requests $160.95 for Dinner. Pay via{" "}
                <a href="https://pay.xyz/fiestamexicana">
                  https://pay.xyz/fiestamexicana
                </a>
              </div>
            ),
          },
        ]}
      />
    );
    const phoneTime = getByTestId("phone-time");
    expect(phoneTime).toHaveTextContent("9:41");
    const messageTime = getByTestId("message-time");
    expect(messageTime).toHaveTextContent("Tuesday 9:41");
    const message = getByTestId("message-0");
    expect(message).toHaveTextContent(
      "Fiesta Mexicana requests $160.95 for Dinner. Pay via https://pay.xyz/fiestamexicana"
    );
    rerender(
      <TextMessagePreview
        time="10:41"
        day={"Sunday"}
        messages={[
          {
            content: (
              <div>
                Fiesta Mexicana requests $160.95 for Dinner - Custom. Pay via{" "}
                <a href="https://pay.xyz/fiestamexicana">
                  https://pay.xyz/fiestamexicana
                </a>
              </div>
            ),
          },
        ]}
      />
    );
    const customPhoneTime = getByTestId("phone-time");
    expect(customPhoneTime).toHaveTextContent("10:41");
    const customMessageTime = getByTestId("message-time");
    expect(customMessageTime).toHaveTextContent("Sunday 10:41");
    const customMessage = getByTestId("message-0");
    expect(customMessage).toHaveTextContent(
      "Fiesta Mexicana requests $160.95 for Dinner - Custom. Pay via https://pay.xyz/fiestamexicana"
    );
    rerender(
      <TextMessagePreview
        messages={[
          {
            content: (
              <div>
                Fiesta Mexicana requests $160.95 for Dinner. Pay via{" "}
                <a href="https://pay.xyz/fiestamexicana">
                  https://pay.xyz/fiestamexicana
                </a>
              </div>
            ),
          },
          {
            content: "Request Approved",
            direction: "RIGHT",
          },
          {
            content: (
              <div>
                Mark Wood requests $149.61 for Taxi. Pay via{" "}
                <a href="https://pay.xyz/markwood">https://pay.xyz/markwood</a>
              </div>
            ),
          },
        ]}
      />
    );
  });
});
