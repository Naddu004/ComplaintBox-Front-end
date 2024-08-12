// import { React, useState } from 'react'

// const Category = () => {

//     const [cards] = useState([
//         {
//             title: 'Card-1',
//             text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta feugiat ante. Sed eget tellus dui.
//                             In scelerisque dui at nisi porta, non ultricies felis sollicitudin.Proin porta ipsum felis, eu dictum
//                             magna lobortis in.Aliquam sed erat et eros consectetur suscipit.Curabitur lacinia mauris vel rhoncus
//                             accumsan.In viverra metus eu tellus scelerisque, at eleifend enim lacinia.Proin a dolor quis turpis
//                             convallis lobortis sit amet non mauris.Phasellus commodo quam a nunc dictum rhoncus.`
//         },
//         {
//             title: 'Card-2',
//             text: <h3>Cat-2</h3>
//         },
//         {
//             title: 'Card-3',
//             text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta feugiat ante. Sed eget tellus dui.
//                             In scelerisque dui at nisi porta, non ultricies felis sollicitudin.Proin porta ipsum felis, eu dictum
//                             magna lobortis in.Aliquam sed erat et eros consectetur suscipit.Curabitur lacinia mauris vel rhoncus
//                             accumsan.In viverra metus eu tellus scelerisque, at eleifend enim lacinia.Proin a dolor quis turpis
//                             convallis lobortis sit amet non mauris.Phasellus commodo quam a nunc dictum rhoncus.`
//         },
//         {
//             title: 'Card-4',
//             text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta feugiat ante. Sed eget tellus dui.
//                             In scelerisque dui at nisi porta, non ultricies felis sollicitudin.Proin porta ipsum felis, eu dictum
//                             magna lobortis in.Aliquam sed erat et eros consectetur suscipit.Curabitur lacinia mauris vel rhoncus
//                             accumsan.In viverra metus eu tellus scelerisque, at eleifend enim lacinia.Proin a dolor quis turpis
//                             convallis lobortis sit amet non mauris.Phasellus commodo quam a nunc dictum rhoncus.`
//         },

//     ])
//     return (
//         <div>
//             <section className='catsec1'>
//                 <div className='container1'>
//                     <h1>Responsive cards</h1>
//                     <div className='cards'>
//                         {
//                             cards.map((card, i) => (
//                                 <div key={i} className='card'>
//                                     <h3>
//                                         {card.title}
//                                     </h3>
//                                     <p>{card.text}</p>
//                                 </div>
//                             ))
//                         }

//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Category

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import image1 from '../assets/images/img1.png';
import image2 from '../assets/images/img4.jpg';
import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';
function Category() {
    return (
        <div className='container2'>
            <div className='row'>

                <div className='col-md-6'>
                    <Card className="small-card mb-4">
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Missing Complaint</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to="/Form1" className="btn btn-primary">Lodge Complaint</Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-6'>
                    <Card className="small-card mb-4">
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>Fraud Complaint</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to="/Form2" className="btn btn-primary">Lodge Complaint</Link>
                        </Card.Body>
                    </Card>
                </div>

            </div>

            <div className='row'>

                <div className='col-md-6'>
                    <Card className="small-card mb-4">
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>Accident</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to="/Form3" className="btn btn-primary">Lodge Complaint</Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-6'>
                    <Card className="small-card mb-4">
                        <Card.Img variant="top" src={image4} />
                        <Card.Body>
                            <Card.Title>Other Complaint</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to="/Form1" className="btn btn-primary">Lodge Complaint</Link>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>

    );
}

export default Category;