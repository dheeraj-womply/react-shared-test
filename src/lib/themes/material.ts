import { AlertClassKey } from '@material-ui/lab/Alert'
import { PaginationItemClassKey } from '@material-ui/lab/PaginationItem'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import {
    DEFAULT_COLOR,
    DEFAULT_FONT_FAMILY,
    DEFAULT_FONT_FAMILY_BOLD,
    ERROR_MAIN_COLOR,
    PRIMARY_MAIN_COLOR,
    SECONDARY_MAIN_COLOR,
} from './default-styles'

declare module '@material-ui/core/styles/overrides' {
    export interface ComponentNameToClassKey {
        MuiAlert: AlertClassKey
        MuiPaginationItem: PaginationItemClassKey
    }
}

let muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: PRIMARY_MAIN_COLOR,
        },
        secondary: {
            main: SECONDARY_MAIN_COLOR,
        },
        error: {
            main: ERROR_MAIN_COLOR,
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    fontFamily: `${DEFAULT_FONT_FAMILY} !important`,
                    backgroundColor: '#dde5e8 !important',
                    fontSize: '0.9375rem !important',
                },
            },
        },
        MuiAlert: {
            standardError: {
                color: ERROR_MAIN_COLOR,
                backgroundColor: '#feeaea',
            },
            standardSuccess: {
                color: SECONDARY_MAIN_COLOR,
                backgroundColor: '#e9f8ec',
            },
            filledSuccess: {
                backgroundColor: SECONDARY_MAIN_COLOR,
            },
            message: {
                display: 'inline-flex',
                alignItems: 'center',
            },
        },
        MuiButton: {
            contained: {
                '&:hover': {
                    color: DEFAULT_COLOR,
                },
            },
            containedPrimary: {
                color: '#fff',
                '&:hover': {
                    color: '#fff',
                    backgroundColor: PRIMARY_MAIN_COLOR,
                },
            },
            containedSecondary: {
                color: '#fff',
                '&:hover': {
                    color: '#fff',
                    backgroundColor: SECONDARY_MAIN_COLOR,
                },
            },
            outlined: {
                '&:hover': {
                    color: DEFAULT_COLOR,
                },
            },
            outlinedPrimary: {
                '&:hover': {
                    color: PRIMARY_MAIN_COLOR,
                },
            },
            outlinedSecondary: {
                '&:hover': {
                    color: SECONDARY_MAIN_COLOR,
                },
            },
            text: {
                '&:hover': {
                    color: DEFAULT_COLOR,
                },
            },
            textPrimary: {
                '&:hover': {
                    color: PRIMARY_MAIN_COLOR,
                },
            },
            textSecondary: {
                '&:hover': {
                    color: SECONDARY_MAIN_COLOR,
                },
            },
        },
        MuiCard: {
            root: {
                boxShadow: 'none',
            },
        },
        MuiDialogTitle: {
            root: {
                paddingTop: 24,
            },
        },
        MuiDialogContent: {
            root: {
                paddingTop: 0,
                paddingBottom: 24,
            },
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'transparent',
                },
           },
        },
        MuiInput: {
            underline: {
                '&:after': {
                    borderBottom: `2px solid ${PRIMARY_MAIN_COLOR}`,
                },
                '&:before': {
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                },
                '&&&&:hover:before': {
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                },
            },
        },
        MuiInputBase: {
            input: {
                fontSize: '0.9rem',
            },
        },
        MuiList: {
          padding: {
              paddingBottom: 0,
              paddingTop: 0,
          },
        },
        MuiPopover: {
            paper: {
                marginLeft: '-14px',
                width: 'auto',
                maxHeight: 256,
            },
        },
        MuiMenuItem: {
            root: {
                height: 48,
                '&$selected': {
                    color: PRIMARY_MAIN_COLOR,
                },
                paddingTop: 0,
                paddingBottom: 0,
                whiteSpace: 'normal',
                fontSize: '0.9rem',
            },
        },
        MuiBadge: {
            colorPrimary: {
                color: '#fff',
            },
            colorSecondary: {
                color: '#fff',
            },
            colorError: {
                color: '#fff',
            },
        },
        MuiPaginationItem: {
            outlinedPrimary: {
                '&$selected': {
                    color: '#fff',
                    backgroundColor: PRIMARY_MAIN_COLOR,
                    '&:hover': {
                        backgroundColor: PRIMARY_MAIN_COLOR,
                    },
                },
            },
            outlinedSecondary: {
                '&$selected': {
                    color: '#fff',
                    backgroundColor: SECONDARY_MAIN_COLOR,
                    '&:hover': {
                        backgroundColor: SECONDARY_MAIN_COLOR,
                    },
                },
            },
            textPrimary: {
                '&$selected': {
                    color: '#fff',
                    backgroundColor: PRIMARY_MAIN_COLOR,
                    '&:hover': {
                        backgroundColor: PRIMARY_MAIN_COLOR,
                    },
                },
            },
            textSecondary: {
                '&$selected': {
                    color: '#fff',
                    backgroundColor: SECONDARY_MAIN_COLOR,
                    '&:hover': {
                        backgroundColor: SECONDARY_MAIN_COLOR,
                    },
                },
            },
        },
    },
    mixins: {
        toolbar: {
            padding: 8,
            height: 60,
        },
    },
    typography: {
        button: {
            fontFamily: DEFAULT_FONT_FAMILY_BOLD,
        },
    },
})
muiTheme = responsiveFontSizes(muiTheme)

export default muiTheme
