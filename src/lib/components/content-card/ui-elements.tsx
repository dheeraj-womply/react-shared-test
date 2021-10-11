import React from "react"
import styled from "styled-components"
import { Card } from "@material-ui/core";

export const ContentCardWrapper = styled(Card)`
    padding: 40px;
    border: 1px solid #A8B4B9;
`;

export const ContentCardTitle = styled.div`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.25;
    color: #2D3436;
    margin-bottom: 32px;
`;

export const ContentCard: React.FC<{title?: string, children: any}> = ({ title , children, ...rest }) => (
    <ContentCardWrapper elevation={0} {...rest}>
        {title && <ContentCardTitle>{title}</ContentCardTitle>}
        {children}
    </ContentCardWrapper>
)