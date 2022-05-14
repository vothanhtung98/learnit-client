import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import PostContextProvider from './contexts/PostContext'
import ProtectedRoute from './components/routing/ProtectedRoute'
import Dashboard from './views/Dashboard'
import About from './views/About'

function App() {
	return (
		<AuthContextProvider>
			<PostContextProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="login" element={<Auth authRoute='login' />} />
						<Route path="register" element={<Auth authRoute='register' />} />
						<Route
							path="dashboard"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>}
						/>
						<Route
							path="about"
							element={
								<ProtectedRoute>
									<About />
								</ProtectedRoute>}
						/>
					</Routes>
				</Router>
			</PostContextProvider>
		</AuthContextProvider>
	)
}

export default App
