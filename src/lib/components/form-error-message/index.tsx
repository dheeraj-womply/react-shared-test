import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '@material-ui/icons/Error';

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const FormErrorIcon = styled(ErrorIcon)`
    color: #dd4027;
    vertical-align: bottom;
    margin-right: 8px;
`

export const FormErrorMessage: React.FC<{ errorMessage: string }> = ({ errorMessage }) => {
    return (
        <ErrorContainer data-testid="form-error-message">
            <span><FormErrorIcon/></span>
            <span>{errorMessage}</span>
        </ErrorContainer>
    )
}