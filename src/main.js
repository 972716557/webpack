import format from './utils/format';
import './index.css';
format();
const sum = (data) => {
	return data.reduce((acc, cur) => acc + cur, 0);
};
sum([1, 2, 3, 4]);
