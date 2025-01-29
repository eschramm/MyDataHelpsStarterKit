import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

export function App() {
	return (
		<Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
	)
}