import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {
  INFO_ICON,
  SIGNAL_WIFI_BATTERY,
  WOMPLY_LOGO_CIRCULAR,
} from "../../resources/images";

export type MessageType = {
  content: React.ReactNode | string;
  direction?: "LEFT" | "RIGHT";
};

export interface TextMessagePreviewProps
  extends React.HTMLProps<HTMLDivElement> {
  messages?: MessageType[];
  time?: string;
  day?: string;
  hideMessageTime?: boolean;
  hideStatusBar?: boolean;
  hideHeader?: boolean;
  children?: React.ReactNode;
}

const PhoneFrameContainer = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PhoneFrameHeader = styled.div`
  box-shadow: 0 0.3px 0 rgba(0, 0, 0, 0.4);
`;
const PhoneFrameStatusBar = styled.div`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PhoneFrameHeaderTime = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;
`;
const PhoneFrameHeaderInfo = styled.div`
  display: flex;

  & > * {
    margin-left: 0.25rem;
  }
`;

const PhoneFrameNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const PhoneFrameContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  overflow: auto;

  & > * {
    padding-bottom: 1rem;
  }
`;

export const PhoneFrameContentTimeStampDay = styled.span`
  font-weight: 500;
`;

export const PhoneFrameContentTimeStamp = styled.div`
  font-size: 0.688rem;
  line-height: 0.813rem;
  letter-spacing: 0.004rem;
  color: #8a8a8f;
  text-align: center;
`;
export const PhoneFrameContentMessage = styled.div<{
  sent?: boolean;
  backgroundColor?: string;
}>`
  background: ${({ backgroundColor }) => backgroundColor ?? "#e5e5ea"};
  border-radius: 15px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 5;
  font-size: 1.063rem;
  align-self: ${({ sent }) => (sent ? "flex-end" : "flex-start")};

  &:before,
  &:after {
    border-radius: 20px / 5px;
    content: "";
    display: block;
    position: absolute;
  }

  &:before {
    border: 10px solid transparent;
    bottom: 0;
    left: ${({ sent }) => (sent ? "auto" : "-7px")};
    right: ${({ sent }) => (sent ? "-7px" : "auto")};
    z-index: -2;
    transform: rotate(${({ sent }) => (sent ? "180deg" : "0deg")});
  }

  &:after {
    border: 11px solid transparent;
    border-bottom-color: ${({ backgroundColor }) =>
      backgroundColor ?? "#e5e5ea"};
    bottom: ${({ sent }) => (sent ? "0" : "-1px")};
    left: ${({ sent }) => (sent ? "auto" : "-10px")};
    right: ${({ sent }) => (sent ? "-10px" : "auto")};
    transform: rotateY(${({ sent }) => (sent ? "180deg" : "0deg")});
  }

  & * {
    pointer-events: none;
    cursor: default;
  }
`;

export const TextMessagePreview: React.FC<TextMessagePreviewProps> = ({
  messages,
  time = "9:41",
  day = "Tuesday",
  hideMessageTime = false,
  hideStatusBar = false,
  hideHeader = false,
  children,
  ...rest
}: TextMessagePreviewProps): JSX.Element => {
  return (
    <PhoneFrameContainer {...(rest as any)}>
      <PhoneFrameHeader>
        {!hideStatusBar && (
          <PhoneFrameStatusBar>
            <PhoneFrameHeaderTime data-testid="phone-time">
              {time}
            </PhoneFrameHeaderTime>
            <PhoneFrameHeaderInfo>
              <img src={SIGNAL_WIFI_BATTERY} alt="Signal Wifi Battery Icons" />
            </PhoneFrameHeaderInfo>
          </PhoneFrameStatusBar>
        )}
        {!hideHeader && (
          <PhoneFrameNavigation>
            <ArrowBackIosIcon style={{ color: "#007AFF" }} />
            <img src={WOMPLY_LOGO_CIRCULAR} alt="Womply Logo" />
            <img src={INFO_ICON} alt="Info Icon" />
          </PhoneFrameNavigation>
        )}
      </PhoneFrameHeader>
      <PhoneFrameContent>
        {!hideMessageTime && (
          <PhoneFrameContentTimeStamp data-testid="message-time">
            <PhoneFrameContentTimeStampDay>{day}</PhoneFrameContentTimeStampDay>{" "}
            {time}
          </PhoneFrameContentTimeStamp>
        )}
        {messages &&
          messages.map((message: MessageType, index: number) => (
            <PhoneFrameContentMessage
              key={`message-${index}`}
              data-testid={`message-${index}`}
              sent={message.direction === "RIGHT"}
            >
              {message.content}
            </PhoneFrameContentMessage>
          ))}
        {children}
      </PhoneFrameContent>
    </PhoneFrameContainer>
  );
};
