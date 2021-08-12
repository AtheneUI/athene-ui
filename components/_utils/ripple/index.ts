import './index.css';

interface IOptions {
	color?: string;
	speed?: number;
	opacity?: number;
}
interface IPos {
	x: number;
	y: number;
}

const defaultConfig: IOptions = {
	color: '#000000',
	opacity: 0.5,
	speed: 0.5,
};

// add water ripple dynamic effect
const addWaterRipple = (element: HTMLElement, options: IOptions = {}): void => {
	const config: IOptions = { ...defaultConfig, ...options };
	element.addEventListener(
		'mousedown',
		function (ev: any) {
			const ripple: HTMLSpanElement = document.createElement('span');
			ripple.className = 'ripple';
			const position: DOMRect = this.getBoundingClientRect();
			const range = Math.max(position.width, position.height);
			const pos: IPos = {
				x: ev.clientX - position.left - range / 2,
				y: ev.clientY - position.top - range / 2,
			};
			ripple.style.cssText = `
            top: ${pos.y}px;
            left: ${pos.x}px;
            width: ${range}px;
            height: ${range}px;
            animation-duration: ${config.speed};
            background: ${config.color};
            opacity: ${config.opacity};
        `;
			ripple.addEventListener(
				'animationend',
				function () {
					this.parentNode?.removeChild(this);
				},
				false
			);
			this.appendChild(ripple);
		},
		false
	);
};

export default addWaterRipple;
