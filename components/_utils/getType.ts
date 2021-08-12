/**
 * @param element
 * @description judge param is Object
 */
export const isObject = (element: any) => {
	const type: string = typeof element;
	return type === 'object' && element !== null;
};

/**
 * @param element
 * @description get param type
 */
export const getType = (element: any) => {
	let type: string = typeof element;
	if (!isObject(element)) return type;
	type = Object.prototype.toString.call(element);
	return type.slice(type.indexOf(' ') + 1, type.lastIndexOf(']')).toLowerCase();
};
