/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
import { WingBlankTypeEnum } from './enum';
import { transferRpxToVw } from '../_utils';

interface IWingBlankProps {
	type?: WingBlankTypeEnum;
	children?: ReactNode;
}

const WingBlank: React.FC<IWingBlankProps> = props => {
	const { type = WingBlankTypeEnum.BIG, children } = props;

	const initStyle = () => {
		let blank = 30;
		if (type === WingBlankTypeEnum.MIDDLE) {
			blank = 16;
		} else if (type === WingBlankTypeEnum.SMALL) {
			blank = 10;
		}
		return {
			margin: `0 ${transferRpxToVw(blank)}`,
		};
	};

	return <div style={initStyle()}>{children}</div>;
};

export default WingBlank;
