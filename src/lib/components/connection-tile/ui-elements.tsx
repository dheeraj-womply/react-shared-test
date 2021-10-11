import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import CheckIcon from '@material-ui/icons/Check'
import { IConnectionTile, TileStatus } from './interfaces'
import styled from 'styled-components'
import { PRIMARY_MAIN_COLOR, SECONDARY_MAIN_COLOR, ERROR_MAIN_COLOR, INFO_MAIN_COLOR, DEFAULT_FONT_FAMILY_BOLD } from '../../themes/default-styles'

export const Tile = styled.div`
    border-radius: 3px;
    position: relative;
    border: 1px solid #DDE5E8;
    min-width: 150px;
    &:hover {
        cursor: pointer;
    }
    &:hover svg.arrow {
        fill: ${PRIMARY_MAIN_COLOR};
    }
    &:hover div:nth-of-type(2) span:first-of-type {
        color: ${PRIMARY_MAIN_COLOR};
    }
    &:hover {
        box-shadow: 5px 10px 20px 0 rgba(29, 48, 70, 0.15);
    }
    &.CONNECTION_PENDING {
        border: 2px solid ${INFO_MAIN_COLOR};
    }
    &.CONNECTED_INVALID {
        border: 2px solid ${ERROR_MAIN_COLOR};
    }
    &.CONNECTED_VALID {
        border: 2px solid ${SECONDARY_MAIN_COLOR};
    }
`

export const TileIconContainer = styled.div`
    padding: 15px 26px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid #DDE5E8;
`

export const TileIcon = styled.img`
    max-width: 100%;
    max-height: 69px;
`

export const TileTextContainer = styled.div`
    height: 30px;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
`

export const TileText = styled.span`
    font-family: ${DEFAULT_FONT_FAMILY_BOLD};
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

export const TileImageText = styled.span`
    font-size: 12px;
    font-family: ${DEFAULT_FONT_FAMILY_BOLD};
    text-align: center;
    max-height: 39px;
    line-height: 19.5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const TileTextArrow = styled.span`
    display: flex;
    margin-right: -8px;
`

export const TileStatusContainer = styled.div`
    position: absolute;
    right: -1px;
    top: -1px;
    display: flex;
    padding: 3.5px;
    border-bottom-left-radius: 3px;
    color: #fff;
    font-size: 0.8rem;
    &.CONNECTION_PENDING {
        background: ${INFO_MAIN_COLOR};
    }
    &.CONNECTED_INVALID {
        background: ${ERROR_MAIN_COLOR};
    }
    &.CONNECTED_VALID {
        background: ${SECONDARY_MAIN_COLOR};
    }
`

export const ConnectionTile: React.FC<IConnectionTile> = ({ tile, onClick }) => {
    const getIconBasedOnStatus = (status: TileStatus) => {
        switch (status) {
            case TileStatus.CONNECTED_INVALID:
                return <PriorityHighIcon fontSize="inherit" />
            case TileStatus.CONNECTED_VALID:
                return <CheckIcon fontSize="inherit" />
            case TileStatus.CONNECTION_PENDING:
                return <PriorityHighIcon fontSize="inherit" />
            default:
                return <></>
        }
    }

    return (
        <Tooltip title={tile.label}>
            <Tile className={tile.status} onClick={(event) => onClick && onClick(event)}>
                <TileIconContainer>
                    {
                        !tile.icon &&
                        <TileImageText>{tile.label}</TileImageText>
                    }
                    {
                        tile.icon &&
                        <TileIcon
                            src={tile.icon}
                            alt={tile.label}
                        />
                    }
                </TileIconContainer>
                <TileTextContainer>
                    <TileText>{tile.label}</TileText>
                    <TileTextArrow><KeyboardArrowRightIcon className={'arrow'}/></TileTextArrow>
                </TileTextContainer>
                <TileStatusContainer className={tile.status}>
                    {getIconBasedOnStatus(tile.status)}
                </TileStatusContainer>
            </Tile>
        </Tooltip>
    )
}