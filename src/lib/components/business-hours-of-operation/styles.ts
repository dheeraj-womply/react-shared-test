import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { MEDIUM_FONT_SIZE, DEFAULT_FONT_FAMILY_BOLD } from '../../themes/default-styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        padding: theme.spacing(1),
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: DEFAULT_FONT_FAMILY_BOLD
    },
    formControlLabel : {
      fontSize: MEDIUM_FONT_SIZE,
      fontFamily: DEFAULT_FONT_FAMILY_BOLD
    },
    popoverBustton: {
        margin: '15px auto'
    },
    timepickerLabels : {
      marginBottom: 0,
      fontSize: 14,
      fontFamily: DEFAULT_FONT_FAMILY_BOLD
    },
    timepickerPopoverButtons: {
      minWidth: '100px'
    }
  })
);