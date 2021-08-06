/* eslint-disable no-undef */
import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import Button from '../index';

afterEach(cleanup);

it('className change the style after default button click', () => {
	const result: RenderResult = render(<Button />);

	const button: Element | null = result.container.firstElementChild;
	const targetClassNames: Array<string> = ['athene-button-base-style', 'athene-button-default', 'athene-button'];
	if (button) {
		const classNames: Array<string> = Object.keys(button.classList);
		const bol = classNames.every((_: string, index: number): boolean => {
			const resultClassName: string | null = button.classList.item(index);
			return resultClassName ? targetClassNames.includes(resultClassName) : false;
		});
		expect(bol).toBe(true);
		expect(classNames.length).toBe(targetClassNames.length);
		return;
	}
	expect(button).not.toBeNull();
});
