/* eslint-disable no-undef,max-lines-per-function */
import React from 'react';
import '../components/button/style';
import '../components/wing-blank/style';
import '../components/white-space/style';

// const WingBlank = require("../lib/wing-blank").default;
// const { WingBlankTypeEnum } = require("../lib/wing-blank");
// const WhiteSpace = require("../lib/white-space").default;
// const Button = require("../lib/button").default;
// const { ButtonTypeEnum, ButtonStyleEnum } = require("../lib/button");

// const { WingBlank, WingBlankTypeEnum, WhiteSpace, Button, ButtonTypeEnum, ButtonStyleEnum } = require('../dist/athene');

// import WingBlank, { WingBlankTypeEnum } from '../es/wing-blank';
// import WhiteSpace from '../es/white-space';
// import Button, { ButtonTypeEnum, ButtonStyleEnum } from '../es/button';

import WingBlank, { WingBlankTypeEnum } from '../components/wing-blank';
import WhiteSpace from '../components/white-space';
import Button, { ButtonTypeEnum, ButtonStyleEnum } from '../components/button';

const TestButton: React.FC = () => {
	return (
		<React.Fragment>
			<WhiteSpace />
			<WingBlank>
				<Button>default 按钮</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.MIDDLE}>
				<Button
					type={ButtonTypeEnum.PRIMARY}
					waterRipple={{
						color: '#FFF',
						opacity: 0.5,
					}}
				>
					primary 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					type={ButtonTypeEnum.DANGER}
					waterRipple={{
						color: '#FFF',
						opacity: 0.5,
					}}
				>
					danger 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					type={ButtonTypeEnum.WARNING}
					waterRipple={{
						color: '#FFF',
						opacity: 0.5,
					}}
				>
					warning 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.TEXT}
					waterRipple={{
						color: '#000',
						opacity: 0.5,
					}}
				>
					text 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.TEXT}
					type={ButtonTypeEnum.PRIMARY}
					waterRipple={{
						color: '#1976d2',
						opacity: 0.5,
					}}
				>
					text 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.TEXT}
					type={ButtonTypeEnum.WARNING}
					waterRipple={{
						color: '#ffc800',
						opacity: 0.5,
					}}
				>
					text 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.TEXT}
					type={ButtonTypeEnum.DANGER}
					waterRipple={{
						color: '#dc014e',
						opacity: 0.5,
					}}
				>
					text 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.LINK}
					waterRipple={{
						color: '#1976d2',
						opacity: 0.5,
					}}
				>
					link 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.GHOST}
					waterRipple={{
						color: '#000000de',
						opacity: 0.5,
					}}
				>
					ghost 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.GHOST}
					type={ButtonTypeEnum.PRIMARY}
					waterRipple={{
						color: '#1976d2',
						opacity: 0.5,
					}}
				>
					ghost 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.GHOST}
					type={ButtonTypeEnum.WARNING}
					waterRipple={{
						color: '#ffc800',
						opacity: 0.5,
					}}
				>
					ghost 按钮
				</Button>
			</WingBlank>
			<WhiteSpace />
			<WingBlank type={WingBlankTypeEnum.SMALL}>
				<Button
					buttonStyle={ButtonStyleEnum.GHOST}
					type={ButtonTypeEnum.DANGER}
					waterRipple={{
						color: '#dc004e',
						opacity: 0.5,
					}}
				>
					ghost 按钮
				</Button>
			</WingBlank>
		</React.Fragment>
	);
};

export default TestButton;
