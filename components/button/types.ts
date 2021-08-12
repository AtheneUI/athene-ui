import React, { CSSProperties, ReactNode } from 'react';
import { ButtonTypeEnum, ButtonSizeEnum, ButtonNativeTypeEnum, ButtonShapeEnum, ButtonStyleEnum, ButtonJumpEnum } from './enum';

export type btnDelay = {
	delay: number;
};

export interface IWaterRipple {
	color?: string;
	speed?: number;
	opacity?: number;
}

export interface ISrc {
	type?: ButtonJumpEnum;
	path: string;
}

export interface IButtonProps {
	waterRipple?: boolean | IWaterRipple;
	nativeType?: ButtonNativeTypeEnum;
	buttonStyle?: ButtonStyleEnum;
	loading?: boolean | btnDelay;
	startIcon?: React.ReactNode;
	disableElevation?: boolean;
	endIcon?: React.ReactNode;
	shape?: ButtonShapeEnum;
	style?: CSSProperties;
	type?: ButtonTypeEnum;
	size?: ButtonSizeEnum;
	onClick?: () => void;
	children?: ReactNode;
	disabled?: boolean;
	src?: ISrc;
}
