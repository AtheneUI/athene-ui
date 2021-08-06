/* eslint-disable react/prop-types */
import React, { CSSProperties } from 'react';
import { WhiteSpaceTypeEnum } from './enum';
import { transferRpxToVw } from '../_utils';

interface IWhiteSpaceProps {
	type?: WhiteSpaceTypeEnum;
}

const WhiteSpace: React.FC<IWhiteSpaceProps> = props => {
	const { type = WhiteSpaceTypeEnum.MIDDLE } = props;

	const initStyle = (): CSSProperties => {
		const _type = type.toLowerCase();
		let size = 18;
		switch (_type) {
			case WhiteSpaceTypeEnum.SMALL:
				{
					size = 12;
				}
				break;
			case WhiteSpaceTypeEnum.SUPER_SMALL:
				{
					size = 6;
				}
				break;
			case WhiteSpaceTypeEnum.BIG:
				{
					size = 30;
				}
				break;
			case WhiteSpaceTypeEnum.SUPER_BIG:
				{
					size = 42;
				}
				break;
			default:
				break;
		}

		return {
			height: transferRpxToVw(size),
		};
	};

	return <div className={'athene-whiteSpace'} style={initStyle()}></div>;
};

export default WhiteSpace;
