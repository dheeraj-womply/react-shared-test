import { WORLDPAY_ICON, IACCESS_ICON, TRANSLINK_ICON, PAYMENTSHUB_ICON, TSYS_ICON } from './images'
import { TileStatus } from '../components/connection-tile/interfaces'

export const tileSuccess = {
    label: 'Worldpay',
    icon: WORLDPAY_ICON,
    status: TileStatus.CONNECTED_VALID
}

export const tileError = {
    label: 'iAccess',
    icon: IACCESS_ICON,
    status: TileStatus.CONNECTED_INVALID
}

export const tilePending = {
    label: 'TransLink',
    icon: TRANSLINK_ICON,
    status: TileStatus.CONNECTION_PENDING
}

export const tileDefault1 = {
    label: 'Payments Hub',
    icon: PAYMENTSHUB_ICON,
    status: TileStatus.NOT_CONNECTED
}

export const tileDefault2 = {
    label: 'TSYS',
    icon: TSYS_ICON,
    status: TileStatus.UNABLE_TO_CONNECT
}

export const tileNoIcon = {
    label: 'Payscape',
    status: TileStatus.UNABLE_TO_CONNECT
}