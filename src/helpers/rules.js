export default {
	required: (string) => !!string || 'Обязательное поле',
	requiredArray: (array) => !!array.length || 'Обязательное поле',
};
