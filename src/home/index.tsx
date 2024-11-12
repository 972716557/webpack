import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			home
			<Link to="/interview">
				<Button>go</Button>
			</Link>
		</>
	);
};
export default Home;
