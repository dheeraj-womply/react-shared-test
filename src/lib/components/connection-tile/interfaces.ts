import { MouseEvent } from 'react'

export enum TileStatus {
    CONNECTED_VALID = 'CONNECTED_VALID',
    CONNECTED_INVALID = 'CONNECTED_INVALID',
    NOT_CONNECTED = 'NOT_CONNECTED',
    UNABLE_TO_CONNECT = 'UNABLE_TO_CONNECT',
    CONNECTION_PENDING = 'CONNECTION_PENDING',
}

export interface IConnectionItem {
    label: string;
    icon?: string;
    status: TileStatus;
}

export interface IConnectionTile {
    tile: IConnectionItem;
    onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}