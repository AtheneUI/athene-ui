/* eslint-disable react/prop-types,max-lines-per-function */
import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import classNames from 'classnames';
import { addWaterRipple, getType, isObject } from '../_utils';
import type { IWaterRipple, ISrc, IButtonProps } from './types';
import {
	buttonStyleColors,
	buttonStyleGhostBorderColors,
	buttonTypeColors,
	buttonSize,
	buttonStyleDisabledColor,
	buttonStyleDisabledBorderColor,
	buttonStyleDisabledBorderWidth,
	buttonStyleDisabledBorderType,
	buttonStyleDisabledBgColor,
	buttonTypeDisabledColor,
	buttonTypeDisabledBgColor,
	buttonTypeDefaultColor,
	buttonTypeColor,
	jumpMode,
} from './constant';
import { ButtonTypeEnum, ButtonSizeEnum, ButtonNativeTypeEnum, ButtonStyleEnum, ButtonJumpEnum } from './enum';

// deal add water ripple with button
const dealWaterRipple = (button: HTMLButtonElement, waterRipple?: boolean | IWaterRipple) => {
	if (getType(waterRipple) === 'boolean' || waterRipple === undefined) {
		waterRipple === undefined || waterRipple === true ? addWaterRipple(button) : null;
		return;
	}
	if (isObject(waterRipple)) {
		addWaterRipple(button, waterRipple as IWaterRipple);
		return;
	}
};

// different page jump action's map
const pageJumpMap = {
	[ButtonJumpEnum.HREF]: (src: ISrc) => {
		// use alink jump
		console.log(src);
	},
	[ButtonJumpEnum.REPLACE]: (src: ISrc) => {
		// use browser native api jump
		if (window.location.replace) window.location.replace(src.path);
	},
	[ButtonJumpEnum.TO]: (src: ISrc) => {
		// use route jump
		console.log(src);
	},
};

const Button: React.FC<IButtonProps> = props => {
	const {
		type,
		buttonStyle,
		disableElevation = false,
		waterRipple,
		nativeType = ButtonNativeTypeEnum.BUTTON,
		disabled = false,
		style = {},
		size = ButtonSizeEnum.NORMAL,
		src = { type: ButtonJumpEnum.HREF, path: '' },
	} = props || {};
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [innerStyle, setInnerStyle] = useState<CSSProperties>({});
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		dealButtonStyle(type, buttonStyle, disabled);
		// component visible
		setVisible(true);
	}, []);

	useEffect((): void => {
		if (buttonRef.current && !disabled) {
			// add water ripple dynamic effect
			dealWaterRipple(buttonRef.current, waterRipple);
		}
	}, [buttonRef, visible]);

	// button style's map
	const buttonStyleMap = {
		[ButtonStyleEnum.TEXT]: (disabled: boolean, type: string) => {
			changeStyleHandle(disabled ? buttonStyleDisabledColor : buttonStyleColors[type as ButtonTypeEnum], buttonStyleDisabledBgColor);
		},
		[ButtonStyleEnum.LINK]: (disabled: boolean) => {
			changeStyleHandle(disabled ? buttonStyleDisabledColor : buttonStyleColors[ButtonTypeEnum.PRIMARY], buttonStyleDisabledBgColor);
		},
		[ButtonStyleEnum.GHOST]: (disabled: boolean, type: string) => {
			changeStyleHandle(disabled ? buttonStyleDisabledColor : buttonStyleColors[type as ButtonTypeEnum], buttonStyleDisabledBgColor, {
				border: `${buttonStyleDisabledBorderWidth} ${buttonStyleDisabledBorderType} ${disabled ? buttonStyleDisabledBorderColor : buttonStyleGhostBorderColors[type as ButtonTypeEnum]}`,
			});
		},
	};

	// deal button's style
	const dealButtonStyle = (type?: ButtonTypeEnum, buttonStyle?: ButtonStyleEnum, disabled?: boolean) => {
		const _type: ButtonTypeEnum = type ? type : ButtonTypeEnum.DEFAULT;
		if (buttonStyle) {
			buttonStyleMap[buttonStyle](disabled as boolean, _type);
		} else {
			disabled
				? changeStyleHandle(buttonTypeDisabledColor, buttonTypeDisabledBgColor, { boxShadow: 'none' })
				: changeStyleHandle(_type === ButtonTypeEnum.DEFAULT ? buttonTypeDefaultColor : buttonTypeColor, buttonTypeColors[_type]);
		}
	};

	// change button style's handler
	const changeStyleHandle = (color: string, background: string, options: CSSProperties = {}) => {
		setInnerStyle({
			color,
			background,
			...options,
		});
	};

	// button click's callback
	const onClickButton = () => {
		// execute user custom click event's callback
		props.onClick && props.onClick();
		// check and deal with current params for [href、replace、to]
		if (src.path && jumpMode.includes(src.type as string)) {
			pageJumpMap[src.type as ButtonJumpEnum](src);
		}
	};

	return visible ? (
		<button
			ref={buttonRef}
			className={classNames('athene-button', buttonStyle ? 'athene-button-type-buttonStyle' : '', !disableElevation ? 'button-elevation' : '')}
			type={nativeType}
			style={{ ...innerStyle, ...style, ...buttonSize[size] }}
			onClick={onClickButton}
		>
			{props.children}
		</button>
	) : null;
};

export default Button;
