import React from 'react'
import { Button } from '@material-ui/core'
import { Pagination as MaterialPagination, PaginationItem, PaginationProps } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { DEFAULT_FONT_FAMILY } from '../../themes/default-styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    borderRadius: '0',
    height: '40px',
    width: '40px',
    border: '1px solid #DFE5E7',
    borderRightWidth: '0',

    '&[disabled]': {
      opacity: 'unset',
      color: 'rgba(0, 0, 0, 0.26)'
    }
  },
  previous: {
    borderRadius: '4px',
    marginLeft: '5px',
  },
  next: {
    borderRadius: '4px',
    marginRight: '5px',
  },
  firstLastButton: {
    display: 'flex',
    height: '40px',
    border: '1px solid #DFE5E7',
    borderRadius: '4px',

    '& .MuiButtonBase-root': {
      fontWeight: 400,
      fontFamily: DEFAULT_FONT_FAMILY,
    },
  },
  leftBorderRound: {
    borderRadius: '4px 0 0 4px'
  },
  rightBorderRound: {
    borderRadius: '0 4px 4px 0',
    borderRightWidth: '1px'
  },
  rightBorder: {
    borderRightWidth: '1px'
  },
  allBorderRound: {
    borderRadius: '4px'
  },
  ellipsis: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  marginLeft: {
    marginLeft: '20px'
  },
  marginRight: {
    marginRight: '20px'
  }
}))

export const Pagination: React.FC<PaginationProps> = ({
  count,
  showFirstButton = true,
  showLastButton = true,
  hideNextButton = false,
  hidePrevButton = false,
  variant = 'outlined',
  shape = 'rounded',
  color = 'primary',
  ...rest
}) => {
  const classes = useStyles()
  const { 
    allBorderRound,
    ellipsis,
    firstLastButton,
    leftBorderRound,
    marginLeft,
    marginRight,
    rightBorderRound,
    rightBorder,
    root,
  } = classes

  return (
    <MaterialPagination
      count={count}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      hideNextButton={hideNextButton}
      hidePrevButton={hidePrevButton}
      variant={variant}
      shape={shape}
      color={color}
      {...rest}
      renderItem={
        (item) => {
          if (item.type === 'first') {
            return <div {...item} className={firstLastButton}><Button disabled={item.disabled}>First</Button></div>
          }

          if (item.type === 'last') {
            return <div {...item} className={firstLastButton}><Button disabled={item.disabled}>Last</Button></div>
          }

          if (item.type === 'previous' || item.type === 'next') {
            return <PaginationItem {...item} classes={{ root: `${root} ${classes[item.type]} ${rightBorder}` }} />
          }

          if (item.type === 'page' && item.page === 1) {
            const firstPageClasses = item.page === count ? `${marginRight} ${allBorderRound}` : ''
            return <PaginationItem {...item} classes={{ root: `${root} ${leftBorderRound} ${marginLeft} ${firstPageClasses}` }} />
          }

          if (item.type === 'page' && item.page === count) {
            return <PaginationItem {...item} classes={{ root: `${root} ${rightBorderRound} ${rightBorder} ${marginRight}` }} />
          }

          return <PaginationItem {...item} classes={{ root, ellipsis }} />
        }
      }
    />
  )
}