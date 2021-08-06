const toFixed = (number: number, precision = 3): number => {
	const multiplier: number = Math.pow(10, precision),
		wholeNumber: number = Math.floor(number * multiplier);
	return (Math.round(wholeNumber / 10) * 10) / multiplier;
};

const transferRpxToVw = (rpx: number, precision?: number): string => {
	return `${toFixed((rpx / 750) * 100, precision)}vw`;
};

export default transferRpxToVw;
