import { transferRpxToVw } from '../_utils';

const primary = '#1976d2'; // primary color value
const warning = '#ffc800'; // warning color value
const danger = '#dc014e'; // danger color value
const styleGhostOpacity = '80'; // buttonStyle ghost's opacity value
const typeDefaultColor = '#E0E0E0'; // buttonType's default color value
const styleDefaultColor = '#000000de'; // buttonStyle's default color value
export const buttonStyleDisabledColor = '#00000042';
export const buttonStyleDisabledBorderColor = '#0000001f';
export const buttonStyleDisabledBorderWidth = '1px';
export const buttonStyleDisabledBorderType = 'solid';
export const buttonStyleDisabledBgColor = 'transparent';
export const buttonTypeDisabledColor = '#0000001f';
export const buttonTypeDisabledBgColor = '#00000042';
export const buttonTypeDefaultColor = '#000000de';
export const buttonTypeColor = '#FFFFFF';
const styleGhostDefaultColor = '#0000003b'; // buttonStyle ghost's default color value

// buttonStyle's colors
export const buttonStyleColors = {
	default: styleDefaultColor,
	primary: primary,
	warning: warning,
	danger: danger,
};

// buttonStyle ghost border's colors
export const buttonStyleGhostBorderColors = {
	default: styleGhostDefaultColor,
	primary: `${primary}${styleGhostOpacity}`,
	warning: `${warning}${styleGhostOpacity}`,
	danger: `${danger}${styleGhostOpacity}`,
};

// buttonType's colors
export const buttonTypeColors = {
	...buttonStyleColors,
	default: typeDefaultColor,
};

// button's sizes
export const buttonSize = {
	large: {
		width: '100%',
		height: transferRpxToVw(96),
		fontSize: '16px',
	},
	normal: {
		height: transferRpxToVw(88),
		fontSize: '14px',
		padding: `0 ${transferRpxToVw(15)}`,
	},
	small: {
		height: transferRpxToVw(64),
		fontSize: '12px',
		padding: `0 ${transferRpxToVw(8)}`,
	},
	mini: {
		height: transferRpxToVw(48),
		fontSize: '10px',
		padding: `0 ${transferRpxToVw(4)}`,
	},
};

export const jumpMode = ['href', 'to', 'replace'];
