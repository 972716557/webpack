import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Interview from './interview';
import Home from './home';

function App() {
	return (
		<div>
			{/* <div className="row">
        <NavLink to="/">home</NavLink>
        <NavLink to="/interview">interview</NavLink>
      </div> */}
			<div className="row">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/interview" element={<Interview />} />
				</Routes>
			</div>
		</div>
	);
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
