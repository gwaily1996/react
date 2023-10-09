import { Theme } from '@mui/material';
import { makeStyles } from '../../makeStyles';

const useStyles = makeStyles()((theme: Theme) => ({
	logoutMenu: {
		marginLeft: theme.spacing(3),
		width: 263,
		borderRadius: theme.spacing(1),
		marginTop: '-15px',
		ul: {
			paddingBottom: 0
		}
	},

	menuHeader: {
		margin: '16px 0 24px 16px'
	},
	menuDivider: {
		marginLeft: theme.spacing(1.5),
		marginRight: theme.spacing(1.5)

	},
	menuFooter: {
		padding: 16,
		paddingTop: 0
	}
}));

export default useStyles;
