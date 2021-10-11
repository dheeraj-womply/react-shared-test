import React from 'react';
import styled from 'styled-components';

export const ContentPanelWrapper = styled.div`
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
`;

export const ContentPanelHeader = styled.div`
    font-size: 20px;
    letter-spacing: .005em;
    font-weight: 400;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 64px;
    max-height: 64px;
    padding: 0 16px;
    margin: 0;
    background-color: #0c92e5;
    color: #ffffff;
    box-sizing: border-box;
    @media (max-width: 959.5px) {
        height: 48px;
        max-height: 48px;
    }
`;

export const ContentPanelContent = styled.div`
    padding: 24px;
    background-color: #fafafa;
`;

export const ContentPanel: React.FC<{title: string, children: any}> = ({ title , children}) => (
    <>
        <ContentPanelWrapper>
            <ContentPanelHeader>{title}</ContentPanelHeader>
            <ContentPanelContent>{children}</ContentPanelContent>
        </ContentPanelWrapper>
    </>
)
