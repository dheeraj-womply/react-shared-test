import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TabContext from '@material-ui/lab/TabContext'
import TabList, { TabListProps } from '@material-ui/lab/TabList'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
  root: {
    borderBottom: (props: TabStyleProps) => (props.hideBottomBorder ? 'none' : '1px solid #DFE5E7'),
  },
  flex: {
    gap: '32px',
  },
  tab: {
    padding: '8px 0px',
    minWidth: 0,
    textTransform: 'none',
  },
})

export interface TabStyleProps {
  hideBottomBorder: boolean
}

export interface TabInfo {
  label: string
  value: string
}

type TabsProps = Omit<TabListProps, "onChange"> & {
  hideBottomBorder?: boolean
  value: string
  tabs: TabInfo[]
  children: React.ReactNode
  onChange: (event: React.ChangeEvent<any>, newValue: string) => void
}

export const Tabs: React.FC<TabsProps> = ({
  hideBottomBorder = false,
  indicatorColor = 'primary',
  value,
  tabs,
  variant = 'scrollable',
  scrollButtons = 'on',
  children,
  onChange,
  ...restProps
}): JSX.Element => {
  const classes = useStyles({
    hideBottomBorder,
  })

  return (
    <TabContext value={value}>
      <TabList
        onChange={onChange}
        variant={variant}
        scrollButtons={scrollButtons}
        indicatorColor={indicatorColor}
        classes={{ root: classes.root, flexContainer: classes.flex }}
        {...restProps}
      >
        {tabs &&
          !!tabs.length &&
          tabs.map((tab) => (
            <Tab
              data-testid={`tab-${tab.value}`}
              classes={{ root: classes.tab }}
              label={tab.label}
              value={tab.value}
              key={tab.label}
              disableFocusRipple
              disableRipple
            />
          ))}
      </TabList>
      {children}
    </TabContext>
  )
}
