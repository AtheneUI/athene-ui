/* eslint-disable no-undef */
import React from 'react';
import '../dist/athene.min.css';

// const WingBlank = require("../lib/wing-blank").default;
// const { WingBlankTypeEnum } = require("../lib/wing-blank");
// const WhiteSpace = require("../lib/white-space").default;
// const Button = require("../lib/button").default;
// const { ButtonTypeEnum, ButtonStyleEnum } = require("../lib/button");

// const { WingBlank, WingBlankTypeEnum, WhiteSpace, Button, ButtonTypeEnum, ButtonStyleEnum } = require('../dist/athene');

import WingBlank, { WingBlankTypeEnum } from '../es/wing-blank';
import WhiteSpace from '../es/white-space';
import Button, { ButtonTypeEnum, ButtonStyleEnum } from '../es/button';

const TestButton: React.FC = () => {
	return (
		<React.Fragment>
			<WhiteSpace />
			<WingBlank>
				<Button>default 按钮</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.MIDDLE}>
				<Button type={ButtonTypeEnum.PRIMARY}>primary 按钮</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button type={ButtonTypeEnum.DANGER}>danger 按钮</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button type={ButtonTypeEnum.DANGER} buttonStyle={ButtonStyleEnum.GHOST}>
					danger 按钮
				</Button>
			</WingBlank>
		</React.Fragment>
	);
};

export default TestButton;
