import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

var heroData = [
    {
        id: 1,
        image: require('../assets/images/img5.jpg'),
        // title: 'The perfect design for your website',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        // link: 'https://www.google.com'
    },
    {
        id: 2,
        image: require('../assets/images/img6.jpg'),
    },
    {
        id: 3,
        image: require('../assets/images/img7.jpg'),

    }
]

export default function CarouselComp() {
    return (
        <section id="home" className='hero-block'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img
                                    className="d-block w-100"
                                    src={hero.image}
                                    alt={"Slide" + hero.id}
                                />
                                <Carousel.Caption>
                                    {/* <h3>{hero.title}</h3> */}
                                    {/* <p>{hero.description}</p> */}
                                    <Link to="/lodgeComplaint" className='btn btn-primary custom-btn mb-5 fs-5'>Lodge A Complaint</Link>
                                    <Link to="/category" className='btn btn-primary custom-btn mb-5 fs-5'>Category</Link>
                                    <Link to="/admin" className='btn btn-primary custom-btn mb-5 fs-5'>Admin Login</Link>
                                    {/* <a className='btn btn-primary custom-btn mb-5 fs-5 px-5' href={hero.link}>Admin Login</a> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>

        </section>
    )
}