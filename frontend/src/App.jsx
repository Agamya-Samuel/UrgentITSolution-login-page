import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, Home, Dashboard } from './pages';

function App() {
	return (
		<>
			<div className="App">
				<Router>
					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/login'} element={<Login />} />
						<Route path={'/register'} element={<Register />} />
						<Route path={'/dashboard'} element={<Dashboard />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
