import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import NavbarMenu from '../components/layout/NavbarMenu'
import Card from 'react-bootstrap/Card'

const About = () => {
    // Contexts
    const { authState: { user: { username } } } = useContext(AuthContext)
    return (
        <>
            <NavbarMenu />
            <Card className='text-center mx-5 my-5'>
                <Card.Header as='h1'>Hi {username}</Card.Header>
                <Card.Body>
                    <Card.Title>Welcome to LearnIt</Card.Title>
                    <Card.Text>
                        This app is deployed at Heroku(Server) and Firebase(Client)
                    </Card.Text>
                    <Card.Text>
                        You can visit source code
                        <span> </span>
                        <a href='https://github.com/vothanhtung98?tab=repositories' target='blank'>here</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default About