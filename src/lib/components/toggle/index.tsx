import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export interface ITab {
  label: string | React.ReactNode;
  id: string;
  content?: React.ReactNode;
}

export interface IToggle extends React.HTMLProps<HTMLDivElement> {
  tabs: ITab[];
  defaultSelected?: string;
  scrollAmount?: number;
  hideArrows?: boolean;
  onTabChange?: (id: string) => void;
  children?: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  position: relative;

  & input[type="radio"] {
    display: none;
  }
`;

const Tabs = styled.div`
  min-height: 56px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
  background-color: #f0f4f4;
  border-radius: 4px;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }

  & * {
    z-index: 2;
  }
`;

const Tab = styled.div`
  position: relative;
  width: 100%;
  min-height: 56px;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0.05rem;
  color: #2d3436;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  z-index: 3;
  white-space: nowrap;

  & * {
    cursor: pointer;
  }
`;

const Label = styled.label`
  width: 100%;
  text-align: center;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  //padding: 0 16px;
  padding: 16px;
`;

const Slider = styled.span<{ translateX: number; width: number }>`
  position: absolute;
  display: flex;
  height: calc(100% - 16px);
  width: ${({ width }) => `${width - 16}px`};
  background: #ffffff;
  border-radius: 4px;
  z-index: 1;
  transition: 0.25s ease-out;
  margin: 8px;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
`;

const Arrow = styled.span<{ left: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  position: absolute;
  height: 40px;
  background: #fff;
  top: 8px;
  left: ${({ left }) => `${left ? "4px" : "auto"}`};
  right: ${({ left }) => `${!left ? "4px" : "auto"}`};
  border-radius: 4px;
  z-index: 4;
  border: 1px solid #f0f0f0;

  &:hover {
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.05), 0 6px 12px 0 rgba(0, 0, 0, 0.05);
  }
`;

const Ellipsis = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Toggle: React.FC<IToggle> = ({
  tabs,
  onTabChange,
  children,
  defaultSelected,
  scrollAmount = 300,
  hideArrows = false,
  ...rest
}: IToggle): JSX.Element | null => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabsWidths, setTabWidths] = useState<number[]>([]);
  const [showLeft, setShowLeft] = useState<boolean>(false);
  const [showRight, setShowRight] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(
    defaultSelected || (tabs && tabs.length > 0 && tabs[0].id)
  );

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const handleTabChange = (id: string): void => {
    /* istanbul ignore else*/
    if (tabsRef.current) {
      const scrollLeftAmount = tabsWidths
        .slice(
          0,
          tabs.findIndex((tab) => tab.id === id)
        )
        .reduce((r, i) => r + i, 0);
      tabsRef.current.scrollTo({
        left: hideArrows ? scrollLeftAmount : scrollLeftAmount - 42,
        behavior: "smooth",
      });
    }
    setActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  const scrollSmoothly = (change: number): void => {
    /* istanbul ignore else*/
    if (tabsRef.current) {
      tabsRef.current.scrollBy({
        left: change,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (left: boolean) => {
    scrollSmoothly(left ? -scrollAmount : scrollAmount);
  };

  const checkTabsDimension = () => {
    if (
      tabsRef &&
      tabsRef.current &&
      tabsRef.current.clientWidth < tabsRef.current.scrollWidth &&
      !hideArrows
    ) {
      setShowRight(
        tabsRef.current.scrollLeft + tabsRef.current.clientWidth + 2 <=
          tabsRef.current.scrollWidth
      );
      setShowLeft(tabsRef.current.scrollLeft > 0);
    } else {
      setShowLeft(false);
      setShowRight(false);
    }
  };

  useEffect(() => {
    if (tabsRef && tabsRef.current) {
      const widthsArray: number[] = [];
      tabsRef.current.childNodes.forEach((node: ChildNode) => {
        if (node.nodeName === "DIV") {
          const div = node as HTMLDivElement;
          widthsArray.push(div.clientWidth);
        }
      });
      setTabWidths(widthsArray);
      tabsRef.current.scrollTo({ left: 0, behavior: "smooth" });
      checkTabsDimension();
    }
  }, [tabsRef, tabs]);

  return tabs && tabs.length > 0 ? (
    <Container {...(rest as any)}>
      {showLeft && (
        <Arrow data-testid="left-arrow" left onClick={() => handleScroll(true)}>
          <ArrowBackIosIcon />
        </Arrow>
      )}
      <Tabs ref={tabsRef} onScroll={checkTabsDimension}>
        {tabs.map((tab: ITab) => (
          <Tab key={tab.id}>
            <input
              data-testid={`input-${tab.id}`}
              onClick={() => handleTabChange(tab.id)}
              type="radio"
              id={tab.id}
              name="tabs"
              defaultChecked={activeTab === tab.id}
            />
            <Label htmlFor={tab.id}>
              <Ellipsis>{tab.label}</Ellipsis>
            </Label>
          </Tab>
        ))}
        <Slider
          translateX={
            activeIndex === 0
              ? 0
              : tabsWidths.slice(0, activeIndex).reduce((r, i) => r + i, 0)
          }
          width={tabsWidths[activeIndex]}
        />
      </Tabs>
      {showRight && (
        <Arrow
          data-testid="right-arrow"
          left={false}
          onClick={() => handleScroll(false)}
        >
          <ArrowForwardIosIcon />
        </Arrow>
      )}
      <div data-testid="slider-tabs-content">
        {children ? children : tabs[activeIndex].content}
      </div>
    </Container>
  ) : null;
};
