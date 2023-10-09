/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
	IconButton, Paper, Tooltip
} from '@mui/material';
import { Box } from '@mui/system';
import {
	ArrowBack,
	Home,
	Search,
	ControlPoint,
	Apps,
	Notifications,
	Settings,
	HelpOutlineOutlined,
	WifiOutlined,
	AccountCircle
} from '@mui/icons-material';

//import UserAvatar from '../UserAvatar';
import useStyles from './styles';
import {
	IconProps, NavigationBarProps
} from './types';
import LogoutMenu from './logoutMenu';

const NavigationBar = (props: NavigationBarProps) => {
	const {
		backButtonProps,
		homeButtonProps,
		avatarButtonProps,
		searchButtonProps,
		addButtonProps,
		switchButtonProps,
		notificationButtonProps,
		settingsButtonProps,
		helpButtonProps,
		connectionButtonProps,
		fixedPosition
	} = props;
	const { classes } = useStyles();

	const topIcons: IconProps[] = [
		{
			icon: <ArrowBack />,
			title: 'Back',
			...backButtonProps
		},
		{
			icon: <Home />,
			title: 'Home',
			...homeButtonProps
		},
		{
			icon: <Search />,
			title: 'Search',
			...searchButtonProps
		},
		{
			icon: <ControlPoint />,
			title: 'Add / Create',
			...addButtonProps
		}
	];

	const bottomIcons: IconProps[] = [
		{
			icon: <Apps />,
			onClick: () => {
			},
			title: 'Switch apps',
			...switchButtonProps

		},
		{
			icon: <Notifications />,
			title: 'Notifications',
			...notificationButtonProps
		},
		{
			icon: <Settings />,
			title: 'Settings',
			...settingsButtonProps
		},
		{
			icon: <HelpOutlineOutlined />,
			title: 'Help',
			...helpButtonProps
		},
		{
			icon: <AccountCircle />,
			title: 'Avatar',
			...avatarButtonProps
		},
		{
			icon: <WifiOutlined />,
			title: 'Connection status',
			...connectionButtonProps

		}
	];

	const IconButtonWrapper = ({
		title, icon, onClick, disabled, isHidden, ...restProps
	}: IconProps) => {
		const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

		const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
			if (!anchorEl) {
				setAnchorEl(event.currentTarget);
			} else {
				setAnchorEl(null);
			}
		};
		const handleClose = () => {
			setAnchorEl(null);
		};

		// special case for the avatar and logout component
		if (title === 'Avatar' /*&& restProps.user?.name*/) {
			const {
				user = {
					title: '', name: '', practice: '', role: ''
				}, APP_VERSION = '', APP_NAME = '', onLogoutClick = ():void => { }
			} = { ...restProps };
			return (
				<div className={classes.avatarIcon}>
					{/* <UserAvatar
						size="medium"
						user={user}
						onClick={onClick || handleClick}
					/> */}
					<LogoutMenu
						APP_VERSION={APP_VERSION}
						APP_NAME={APP_NAME}
						anchorEl={anchorEl}
						handleClose={handleClose} handleLogout={onLogoutClick}
					/>
				</div>
			);
		}

		return (
			<Tooltip title={title ?? ''} placement="right">
				<IconButton
					id="navigation-bar-icon-button"
					onClick={onClick}
					className={`${classes.icon} ${isHidden ? classes.hideIcon : undefined}`}
					disabled={disabled}
				>
					{icon}
				</IconButton>
			</Tooltip>
		);
	};

	const iconsGenerator = (arr: IconProps[]) => arr.map((element) => {
		const {
			title, icon, onClick, isHidden, ...rest
		} = element;
		return (
			<IconButtonWrapper
				key={title}
				icon={icon}
				title={title}
				onClick={onClick}
				isHidden={isHidden}
				{...rest}
			/>
		);
	});

	return (
		<Paper className={`${classes.sidebar} ${fixedPosition && classes.fixedSideBar}`}>
			<Box className={classes.sidebarContainer}>
				{/* Top section */}
				<Box className={classes.topIconsContainer}>
					{iconsGenerator(topIcons)}
				</Box>
				{/* Bottom section */}
				<Box className={classes.bottomIconsContainer}>
					{iconsGenerator(bottomIcons)}
				</Box>
			</Box>
		</Paper>

	);
};

export default NavigationBar;
