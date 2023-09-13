import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConsultPic from '../../Asset/Pic/consulting.png';
import ExamPic from '../../Asset/Pic/exam.png';
import JobOffersPic from '../../Asset/Pic/jobOffers.png';
import ValidLicensePic from '../../Asset/Pic/validLicense.png';
import styles from './Services.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Services() {
    return (
        <section>
            <Container className={styles.box}>
                <p className={styles.OurServices}>خدمات ما</p>
                <Row className={styles.all}>
                    <Col md={3}>
                        <Card className={`${styles.card} `} dir="rtl">
                            <Card.Img className={`${styles.CardImg} `} variant="top" src={ConsultPic} alt="consulting" />
                            <Card.Body>
                                <Card.Title className={`${styles.CardTitle}`}>مشاوره</Card.Title>
                                <Card.Text className={styles.CardText}>
                                    تیم ما مشاوره های لازم را به شما می دهد
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col md={3}>
                        <Card className={`${styles.card}   `} dir="rtl" >
                            <Card.Img className={`${styles.CardImg} `} variant="top" src={ExamPic} alt="exam" />
                            <Card.Body>
                                <Card.Title className={`${styles.CardTitle}`} >امتحان</Card.Title>
                                <Card.Text className={styles.CardText}>
                                    تیم ما مشاوره های لازم را به شما می دهد
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className={`${styles.card}  `} dir="rtl" >
                            <Card.Img className={`${styles.CardImg} `} variant="top" src={JobOffersPic} alt="jobOffers" />
                            <Card.Body>
                                <Card.Title className={`${styles.CardTitle}`} >فرصت های شغلی</Card.Title>
                                <Card.Text className={styles.CardText}>
                                    تیم ما مشاوره های لازم را به شما می دهد
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card className={`${styles.card}   `} dir="rtl">
                            <Card.Img className={`${styles.CardImg} `} variant="top" src={ValidLicensePic} alt="validLicense" />
                            <Card.Body>
                                <Card.Title className={`${styles.CardTitle}`} >مدرک معتبر</Card.Title>
                                <Card.Text className={styles.CardText}>
                                    تیم ما مشاوره های لازم را به شما می دهد
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>



                </Row>
            </Container>
        </section>
    );
}
export default Services;