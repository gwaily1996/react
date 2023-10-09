import React from 'react';

import {
	Divider, Typography, Menu, MenuItem
} from '@mui/material';
import useStyles from './styles';

interface LogoutMenuProps {
    anchorEl: null | HTMLElement
    handleClose: ()=>void
    APP_VERSION: string
    handleLogout: ()=>void
	APP_NAME?: string
}

const LogoutMenu = ({
	anchorEl, handleClose, APP_VERSION, handleLogout, APP_NAME
}:LogoutMenuProps) => {
	const open = Boolean(anchorEl);
	const { classes } = useStyles();

	return (
		<Menu
			id="logoutMenu"
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			PaperProps={{
				className: classes.logoutMenu
			}}
		>

			<Typography variant="body2" color="text.secondary" className={classes.menuHeader}>User actions</Typography>
			<MenuItem
				onClick={handleLogout}
				disableRipple
			>
				<Typography variant="body1">Log out</Typography>
			</MenuItem>
			<Divider variant="middle" className={classes.menuDivider} />
			<div className={classes.menuFooter}>
				<Typography variant="body1" color="text.primary">{APP_NAME || 'Document Centre'}</Typography>
				<Typography variant="body2" color="text.secondary">
				Version
					{' '}
					{APP_VERSION}
				</Typography>
			</div>

		</Menu>
	); };

export default LogoutMenu;
