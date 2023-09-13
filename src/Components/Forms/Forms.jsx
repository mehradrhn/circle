import Form from 'react-bootstrap/Form';


function Forms({ name }) {


    return (

        <Form>
            
            <p> {name} </p>
            <Form.Control dir="rtl"
                type="name"
                placeholder=""
                aria-label="name"


            />
        </Form>

    );
}

export default Forms; 