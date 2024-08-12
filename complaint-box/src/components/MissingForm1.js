import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function MissingForm1() {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Handle form submission logic here
    };
    return (
        <div className='divform1'>
            <section className='FormSec1'>
                <Form className='formmain' onSubmit={handleSubmit}>
                    <h3 className='missing_comp'> Missing Complaint Form</h3>

                    <Form.Control type="text" value="Missing" placeholder="Missing" className='formselect1' id='fms' disabled />

                    <Form.Select aria-label="Default select example" className='formselect1' id='fms'>
                        <option>Area Names</option>
                        <option value="400002">Churchgate</option>
                        <option value="400021">Nariman Point</option>
                        <option value="400008">Mumbai Central</option>
                        <option value="400005">Colaba</option>
                        <option value="400020">Marine Line</option>
                    </Form.Select>

                    <Form.Control type="text" placeholder="Street No (Optional)" className='formselect1' id='fms' />

                    <Form.Control type="text" placeholder="Building No(Optional)" className='formselect1' id='fms' />

                    <FloatingLabel controlId="floatingTextarea2" label="Complaint Description" className='formselect1' id='fms'>
                        <Form.Control required
                            as="textarea"
                            placeholder="Complaint Description"
                            style={{ height: '200px' }}
                        />
                    </FloatingLabel>

                    <h6 className='formh6'>
                        Victim Information
                    </h6>

                    <Form.Control type="text" placeholder="Name (Optional)" className='formselect1' id='fms' />
                    {/* <Form.Control type="text" placeholder="Age (Optional)" className='formselect1' id='fms' /> */}
                    <Form.Select aria-label="Default select example" className='formselect1' id='fms'>
                        <option>Select Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </Form.Select>
                    <Form.Group controlId="formFile" className=" formselect1 mb-3" id='fms'>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button className='btnform3' type='submit' variant="outline-secondary">Submit</Button>{' '}
                    <Button className='btnform3' type='reset' variant="outline-secondary">reset</Button>{' '}
                </Form>

            </section>

        </div>
    );
}

export default MissingForm1;