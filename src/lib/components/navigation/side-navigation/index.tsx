import React from "react";
import {
  Theme,
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { CLOSE_NAV_X } from "../../../resources/images";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export const drawerWidth = 265;

export const drawerTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#000000"
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiList: {
      root: {
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      padding: {
        paddingTop: '12px',
      }
    },
    MuiListItem: {
      root: {
        color: "#fff",
        borderRadius: "4px",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "17px",
        "&$selected": {
          backgroundColor: "#26BA8F"
        },
        "&$selected:hover": {
          backgroundColor: "#26BA8F"
        }
      },
      button: {
        "&:hover": {
          backgroundColor: "#26BA8F"
        }
      },
      gutters: {
        paddingLeft: "7px",
        paddingRight: "7px"
      }
    },
    MuiListItemText: {
      root: {
        marginTop: "7px",
        marginBottom: "7px",
      },
      primary: {
        fontWeight: 'bold',
        fontSize: "22px",
        "@media (min-width:600px)": {
          fontSize: "14px"
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: "25px",
        marginRight: "8px"
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "rgba(204, 204, 204, 0.3)"
      }
    },
    MuiDrawer: {
      paper: {
        width: "100%",
        "@media (min-width:600px)": {
          width: drawerWidth
        }
      },
      paperAnchorDockedLeft: {
        borderRight: "none"
      }
    }
  }
});

export const subItemTheme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiList: {
      root: {
        marginTop: "-17px"
      }
    },
    MuiListItem: {
      root: {
        color: "#aaa",
        borderLeft: "3px solid transparent",
        borderRadius: "0px",
        marginTop: '8px',
        marginBottom: '8px',
        paddingTop: '0px',
        paddingBottom: '0px',
        "&$selected": {
          backgroundColor: "transparent",
          borderLeft: "3px solid #26BA8F",
          color: "unset"
        },
        "&$selected:hover": {
          backgroundColor: "transparent",
          borderLeft: "3px solid #26BA8F",
          color: "unset"
        }
      },
      button: {
        "&:hover": {
          backgroundColor: "transparent",
          borderLeft: "3px solid #26BA8F",
          color: "unset"
        }
      }
    },
    MuiListItemText: {
      root: {
        paddingLeft: "21px"
      },
      primary: {
        fontWeight: 'normal',
        fontSize: "15px",
        "@media (min-width:600px)": {
          fontSize: "14px"
        }
      }
    }
  }
});

interface NavigationListItemProps {
  title: string;
  selected: boolean;
  iconUrl: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const NavigationListItem: React.FC<NavigationListItemProps> = ({
  title,
  selected,
  iconUrl,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <ListItem
      button
      selected={selected}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <ListItemIcon>
        <img src={iconUrl} alt={`${title} icon`} style={{ width: "24px" }} />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

interface NavigationSubListItemProps {
  title: string;
  selected: boolean;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const NavigationSubListItem: React.FC<NavigationSubListItemProps> = ({
  title,
  selected,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <ListItem
      button
      selected={selected}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <ListItemText primary={title} />
    </ListItem>
  );
};

interface CollapsableNavigationListProps {
  key?: string | number;
  children: React.ReactNodeArray;
  open: boolean;
  theme?: Theme;
}

export const CollapsableNavigationList: React.FC<CollapsableNavigationListProps> = ({
  key,
  children,
  open,
  theme = subItemTheme
}) => {
  return (
    <ThemeProvider<Theme> theme={theme} key={key}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </ThemeProvider>
  );
};

interface SideNavigationProps {
  children: React.ReactNode | React.ReactNodeArray;
  theme?: Theme;
  isMobileOpen: boolean;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

const useStyles = makeStyles(theme => ({
  nav: {
    minWidth: `${drawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      minWidth: "0px"
    }
  }
}));

export const SideNavigation: React.FC<SideNavigationProps> = ({
  children,
  theme = drawerTheme,
  isMobileOpen,
  onClose = () => {}
}) => {
  const classes = useStyles();

  return (
    <ThemeProvider<Theme> theme={theme}>
      <nav className={classes.nav}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={isMobileOpen}
            onClose={onClose}
            ModalProps={{
              keepMounted: true
            }}
          >
            <Hidden smUp implementation="css">
              <Box position="absolute" right="0" px="16px" pt="20px">
                <CloseButton onClick={() => onClose({}, "escapeKeyDown")}>
                  <img
                    src={CLOSE_NAV_X}
                    alt={"Close"}
                    style={{ width: 29, height: 29 }}
                  />
                </CloseButton>
              </Box>
            </Hidden>
            {children}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" open>
            {children}
          </Drawer>
        </Hidden>
      </nav>
    </ThemeProvider>
  );
};

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  height: 29px;
  opacity: 0.78;
  cursor: pointer;
  padding: 0;
`;

export default SideNavigation;