/* eslint-disable react/prop-types */
import React, { useEffect, useRef, CSSProperties, ReactNode } from 'react';
import { btnDelay } from './types';
import classNames from 'classnames';
import { addWaterRipple } from '../_utils';
import { ButtonTypeEnum, ButtonSizeEnum, ButtonIconPositionEnum, ButtonNativeTypeEnum, ButtonShapeEnum, ButtonStyleEnum } from './enum';

interface IWaterRipple {
	color?: string;
	speed?: number;
	opacity?: number;
}

interface IButtonProps {
	onClick?: React.MouseEventHandler<HTMLElement>;
	iconPosition?: ButtonIconPositionEnum;
	nativeType?: ButtonNativeTypeEnum;
	loading?: boolean | btnDelay;
	style?: CSSProperties;
	to?: string;
	shape?: ButtonShapeEnum;
	type?: ButtonTypeEnum;
	buttonStyle?: ButtonStyleEnum;
	size?: ButtonSizeEnum;
	disabled?: boolean;
	replace?: boolean;
	icon?: ReactNode;
	href?: string;
	children?: ReactNode;
	disableElevation?: boolean;
	waterRipple?: boolean | IWaterRipple;
}

// deal add water ripple with button
const dealWaterRipple = (button: HTMLButtonElement, waterRipple?: boolean | IWaterRipple) => {
	if (typeof waterRipple === 'boolean' || waterRipple === undefined) {
		waterRipple === undefined || waterRipple === true ? addWaterRipple(button) : null;
		return;
	}
	if (typeof waterRipple === 'object' && waterRipple !== null) {
		addWaterRipple(button, waterRipple as IWaterRipple);
		return;
	}
};

// deal button's style
const dealButtonStyle = (type?: ButtonTypeEnum, buttonStyle?: ButtonStyleEnum) => {
	let buttonClassName = '';
	const _type = type ? type : 'default';
	if (buttonStyle) {
		buttonClassName = `athene-button-${_type}-${buttonStyle}`;
	} else {
		buttonClassName = `athene-button-${_type}`;
	}
	return buttonClassName;
};

const Button: React.FC<IButtonProps> = props => {
	const { type, buttonStyle, disableElevation = false, waterRipple } = props || {};
	const buttonRef = useRef<HTMLButtonElement>(null);
	useEffect((): void => {
		const button = buttonRef && buttonRef.current;
		if (button) {
			dealWaterRipple(button, waterRipple);
		}
	}, []);

	return (
		<button ref={buttonRef} className={classNames('athene-button', dealButtonStyle(type, buttonStyle), !disableElevation ? 'button-elevation' : '')}>
			{props.children}
		</button>
	);
};

export default Button;
