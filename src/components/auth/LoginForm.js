import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const LoginForm = () => {
    // Navigate after login success
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/dashboard"

    // Context
    const { loginUser } = useContext(AuthContext)

    // Local state
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const [alert, setAlert] = useState(null)

    const { username, password } = loginForm

    const onChangeLoginForm = event =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
            if (!loginData.success) {
                setAlert({ type: 'danger', message: loginData.message })
                setTimeout(() => setAlert(null), 6000)
            } else {
                navigate(from, { replace: true })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const loginAsGuest = async event => {
        event.preventDefault()

        try {
            const guestAccount = {
                username: 'Guest',
                password: 'Guest123'
            }
            const loginData = await loginUser(guestAccount)
            if (!loginData.success) {
                setAlert({ type: 'danger', message: loginData.message })
                setTimeout(() => setAlert(null), 6000)
            } else {
                navigate(from, { replace: true })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form className='my-3' onSubmit={login}>
                <AlertMessage info={alert} />
                <Form.Group className='mb-2'>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='username'
                        required
                        value={username}
                        onChange={onChangeLoginForm}
                    />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        value={password}
                        onChange={onChangeLoginForm}
                    />
                </Form.Group>
                <Button variant='success' type='submit'>
                    Login
                </Button>
            </Form>
            <p>
                Don't have an account?
                <Link to='/register'>
                    <Button variant='info' size='sm' className='ml-2'>
                        Register
                    </Button>
                </Link>
                <Button variant='success' size='sm' className='ml-2' onClick={loginAsGuest}>
                    Login as Guest
                </Button>
            </p>
        </>
    )
}

export default LoginForm