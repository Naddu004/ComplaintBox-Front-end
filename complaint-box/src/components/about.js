import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import img1 from '../assets/images/aboutus.jpg'

export default function AppAbout() {
    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About Us</h2>
                </div>
                <div className='sub-title'>
                    learn more about us
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} />
                    </Col>
                    <Col sm={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta feugiat ante. Sed eget tellus dui.
                            In scelerisque dui at nisi porta, non ultricies felis sollicitudin. Proin porta ipsum felis, eu dictum
                            magna lobortis in. Aliquam sed erat et eros consectetur suscipit. Curabitur lacinia mauris vel rhoncus
                            accumsan. In viverra metus eu tellus scelerisque, at eleifend enim lacinia. Proin a dolor quis turpis
                            convallis lobortis sit amet non mauris. Phasellus commodo quam a nunc dictum rhoncus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta feugiat ante. Sed eget tellus dui.
                            In scelerisque dui at nisi porta, non ultricies felis sollicitudin. Proin porta ipsum felis, eu dictum
                            magna lobortis in. Aliquam sed erat et eros consectetur suscipit. Curabitur lacinia mauris vel rhoncus
                            accumsan. In viverra metus eu tellus scelerisque, at eleifend enim lacinia. Proin a dolor quis turpis
                            convallis lobortis sit amet non mauris. Phasellus commodo quam a nunc dictum rhoncus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta feugiat ante. Sed eget tellus dui.
                            In scelerisque dui at nisi porta, non ultricies felis sollicitudin. Proin porta ipsum felis, eu dictum
                            magna lobortis in. Aliquam sed erat et eros consectetur suscipit. Curabitur lacinia mauris vel rhoncus
                            accumsan. In viverra metus eu tellus scelerisque, at eleifend enim lacinia. Proin a dolor quis turpis
                            convallis lobortis sit amet non mauris. Phasellus commodo quam a nunc dictum rhoncus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta feugiat ante. Sed eget tellus dui.
                            In scelerisque dui at nisi porta, non ultricies felis sollicitudin. Proin porta ipsum felis, eu dictum
                            magna lobortis in. Aliquam sed erat et eros consectetur suscipit.</p>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}