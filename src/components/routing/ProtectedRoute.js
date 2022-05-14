import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'

const ProtectedRoute = ({ children }) => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    const location = useLocation()

    if (authLoading) return (
        <div className="spinner-container">
            <Spinner animation="border" variant="info" />
        </div>
    )

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return (children)
}

export default ProtectedRoute