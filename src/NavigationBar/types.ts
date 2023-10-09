import React from 'react';
//import { user } from '../UserAvatar/types';

export type IconProps =
	| {
			icon?: JSX.Element;
			onClick?: () => void;
			title: string;
			disabled?: boolean;
			isHidden?: boolean;
			//user?: user;
	  }
	| {
			title: 'Avatar';
			icon?: JSX.Element;
			onClick?: () => void;
			disabled?: boolean;
			isHidden?: boolean;
			//user: user;
			APP_VERSION: string;
			APP_NAME?: string;
			onLogoutClick: () => void;
	  };

interface ButtonProps {
	onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	isHidden?: boolean;
}

interface avatarProps extends ButtonProps {
	//user: user;
	APP_VERSION: string;
	APP_NAME?: string;
	onLogoutClick: () => void;
}
export interface NavigationBarProps {
	backButtonProps?: ButtonProps;
	homeButtonProps?: ButtonProps;
	searchButtonProps?: ButtonProps;
	addButtonProps?: ButtonProps;
	switchButtonProps?: ButtonProps;
	notificationButtonProps?: ButtonProps;
	settingsButtonProps?: ButtonProps;
	helpButtonProps?: ButtonProps;
	connectionButtonProps?: ButtonProps;
	avatarButtonProps?: avatarProps;
	fixedPosition?: boolean;
}
