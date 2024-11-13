import format from './utils/format';
import './index.css';
format();
console.log(111);
const sum = (data) => {
	return data.reduce((acc, cur) => acc + cur, 0);
};
sum([1, 2, 3, 4]);
