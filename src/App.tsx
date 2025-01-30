import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ModalDashboard from './ModalDashboard';

export function App() {
	return (
		<Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/modal" element={<ModalDashboard />} />
            </Routes>
        </Router>
	)
}