import React, { useState } from 'react';

import { Logo } from '../lib/components'
import {
  SideNavigation,
  CollapsableNavigationList,
  NavigationSubListItem,
  NavigationListItem,
  drawerTheme
} from '../lib/components/navigation/side-navigation'

import {
  HOME_THUMB,
  CONNECTIONS_THUMB,
  PAY_THUMB,
  MONITOR_THUMB,
  BOOST_THUMB,
  ENGAGE_THUMB,
  OFFERS_THUMB,
  EMAIL_MARKETING_THUMB,
  STOREFRONT_THUMB,
  BILLS_THUMB,
  SETTINGS_THUMB,
  HELP_THUMB,
  SIGNOUT_THUMB,
} from '../lib/resources/images';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import {
    createStyles,
    makeStyles,
    createMuiTheme,
    ThemeProvider
} from "@material-ui/core/styles";


export default {
    title: 'Side Navigation',
    component: SideNavigation
};


export const SideNavigationDesktop = () => {
    return (
      <SideNavigation isMobileOpen={false} theme={drawerTheme}>
          <DemoDrawer />
      </SideNavigation>
    )
}
export const SideNavigationMobile = () => {
  return (
    <SideNavigation isMobileOpen={true} theme={drawerTheme}>
      <DemoDrawer />
    </SideNavigation>
  )
}

export const SideNavigationCustom = () => {
  return (
    <SideNavigation isMobileOpen={false} theme={createMuiTheme()}>
      <DemoDrawer subItemTheme={createMuiTheme()} />
    </SideNavigation>
  )
}

const menu = [
    {
      title: 'Home',
      image: HOME_THUMB,
    },
    {
      title: 'Connections',
      image: CONNECTIONS_THUMB,
    },
    {
      title: 'Pay',
      image: PAY_THUMB,
      children: [
        {
          title: 'Request Payment',
        },
        {
          title: 'Activity',
        },
        {
          title: 'Settings',
        },
      ],
    },
    {
      title: 'Insights',
      image: MONITOR_THUMB,
    },
    {
      title: 'Reputation',
      image: BOOST_THUMB,
    },
    {
      title: 'Customer Management',
      image: ENGAGE_THUMB,
    },
    {
      title: 'Offers',
      image: OFFERS_THUMB,
    },
    {
      title: 'Email Marketing',
      image: EMAIL_MARKETING_THUMB,
    },
    {
      title: 'Storefront',
      image: STOREFRONT_THUMB,
    },
    {
      title: 'Bills',
      image: BILLS_THUMB,
    },
]

const accountMenu = [
  {
    title: 'Account Settings',
    image: SETTINGS_THUMB,
  },
  {
    title: 'Get Help',
    image: HELP_THUMB,
  },
  {
    title: 'Sign Out',
    image: SIGNOUT_THUMB,
  },
]

const kSelectedItem = 'Pay'
const kSelectedSubItem = 'Activity'

const useStyles = makeStyles((theme) =>
  createStyles({
      toolbar: theme.mixins.toolbar,
  }),
);

const DemoDrawer = ({subItemTheme}) => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState(kSelectedItem)
    const [selectedSubItem, setSelectedSubItem] = useState(kSelectedSubItem)

    return (
      <div>
        <div className={classes.toolbar}>
          <Logo alt="Womply Logo" />
        </div>
          <Divider />
          <List>
              {menu.map((item, index) => (
                <React.Fragment key={`${item.title}`}>
                  <NavigationListItem
                    button
                    key={item.title}
                    selected={selectedItem === item.title}
                    title={item.title}
                    iconUrl={item.image}
                    onClick={() => setSelectedItem(item.title)}
                  />
                  {item.children &&
                    <CollapsableNavigationList open={selectedItem === item.title} theme={subItemTheme}>
                      {item.children.map(sub => (
                        <NavigationSubListItem
                          key={sub.title}
                          title={sub.title}
                          selected={selectedSubItem === sub.title}
                          onClick={() => setSelectedSubItem(sub.title)}
                        />
                        ))}
                    </CollapsableNavigationList>
                  }
                </React.Fragment>
              ))}
          </List>
          <Divider />
          <List>
              {accountMenu.map((item, index) => (
                <NavigationListItem
                  key={item.title}
                  title={item.title}
                  selected={false}
                  iconUrl={item.image}
                  onClick={() => setSelectedItem(item.title)}
                />
              ))}
          </List>
      </div>
    )
}

export const NavigationListItemDefault = () => {
  return (
    <ThemeProvider theme={drawerTheme}>
      <Box bgcolor="#000">
        <NavigationListItem
          title={'Pay'}
          selected={false}
          iconUrl={PAY_THUMB}
          onClick={() => {} }
        />
      </Box>
    </ThemeProvider>
  )
}

export const NavigationListItemSelected = () => {
  return (
    <ThemeProvider theme={drawerTheme}>
      <Box bgcolor="#000">
        <NavigationListItem
          title={'Pay'}
          selected={true}
          iconUrl={PAY_THUMB}
          onClick={() => {} }
        />
      </Box>
    </ThemeProvider>
  )
}

export const CollapsableNavigationListDefault = () => {
  return (
    <ThemeProvider theme={drawerTheme}>
      <Box>
        <CollapsableNavigationList open={true}>
          <NavigationSubListItem
            title="Request Payment"
            selected={true}
            onClick={() => {} }
          />
          <NavigationSubListItem
            title="Activity"
            selected={false}
            onClick={() => {} }
          />
        </CollapsableNavigationList>
      </Box>
    </ThemeProvider>
  )
}
