// @ts-nocheck
import { Theme } from '@mui/material';
import { makeStyles } from '../makeStyles';

const useStyles = makeStyles()((theme: Theme) => ({
	sidebar: {
		display: 'flex',
		justifyContent: 'center',
		flexShrink: '0',
		background: 'white',
		height: '100vh',
		// eslint-disable-next-line max-len
		boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)',
		width: 48,
		zIndex: theme.zIndex.modal // More than the drawer's zIndex
	},
	fixedSideBar: {
		position: 'fixed'
	},
	sidebarContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '2.4rem 0'

	},
	avatarIcon: {
		marginTop: '8px',
		'&:hover': {
			cursor: 'pointer'
		}
	},

	topIconsContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1.6rem'
	},
	bottomIconsContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1.6rem'
	},
	menuHeader: {
		marginBottom: theme.spacing(3)
	},
	icon: {
		color: theme.palette.primary.dark,
		marginTop: theme.spacing(1)
	},
	hideIcon: {
		display: 'none'
	}
}));
export default useStyles;
