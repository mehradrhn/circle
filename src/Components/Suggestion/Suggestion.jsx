import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Suggest from '../../Asset/Pic/suggest.png';

import styles from '../Suggestion/Suggestion.module.css';

function Suggestion() {

    return (

        <Container>
            <p className={styles.title}> پیشنهادات و شکایات  </p>

            <img className={styles.suggestPic}
                src={Suggest}
                alt="suggest pic"
            />



            <Card className={styles.card} style={{ width: '20rem' }}>

                <Card.Body >

                    <div className={styles.email}>

                        <p dir="rtl"> ایمیل شما </p>

                        <Form className="d-flex">

                            <Form.Control

                                type="Email"
                                placeholder="Example@email.com"
                                className="me-2"
                                aria-label="Email"
                            />

                        </Form>

                    </div>

                    <div className={styles.text}>

                        <p dir="rtl"> متن شما </p>

                        <Form className="d-flex">

                            <Form.Control

                                type="Text"
                                placeholder=""
                                className={styles.form}
                                aria-label="Text"
                            />

                        </Form>

                    </div>

                    <Button variant="success" className={styles.send} > ارسال </Button>

                </Card.Body>
            </Card>

        </Container>
    );
}

export default Suggestion;