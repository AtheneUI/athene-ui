/* eslint-disable react/prop-types */
import React, { CSSProperties, ReactNode } from 'react';
import { btnDelay } from './types';
import classNames from 'classnames';
import { ButtonTypeEnum, ButtonSizeEnum, ButtonIconPositionEnum, ButtonNativeTypeEnum, ButtonShapeEnum, ButtonStyleEnum } from './enum';

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
}

const buttonTypes: Array<string> = ['primary', 'danger', 'default'];
const Button: React.FC<IButtonProps> = props => {
	const { type } = props;

	const getButtonStyle = (): string => {
		const _type = type?.toLowerCase();
		return _type && buttonTypes.includes(_type) ? `athene-button-${_type}` : 'athene-button-default';
	};

	return <button className={classNames('athene-button-base-style', 'athene-button', getButtonStyle())}>{props.children}</button>;
};

export default Button;
