import React from 'react';
import NavigationBar from '.';

export default {
	component: NavigationBar,
	title: 'Example/NavigationBar'
};

const Template = (args: any) => (<NavigationBar {...args} />);

export const Default = Template.bind({});

// Default.args = {
// 	...Default.args
// };
