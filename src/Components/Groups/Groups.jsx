import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Groups.module.css';
import WebPic from '../../Asset/Pic/web.png';
import ItPic from '../../Asset/Pic/it.png';
import ReactPic from '../../Asset/Pic/react.png';
import SecurityPic from '../../Asset/Pic/security.png';
import ShabakePic from '../../Asset/Pic/shabake.png';


function Groups() {
    return (
        <section>
            <Container className={styles.holder}>
                <p className={styles.Grouping}>دسته بندی</p>
                <Row className={styles.row}>
                    <Col md={2}>
                        <Card className={styles.card}>
                            <Card.Img className={styles.CardImg} variant="top" src={ReactPic} />
                            <Card.Body>

                                <Card.Title className={styles.CardTitle}>ریکت</Card.Title>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col md={2}>
                        <Card className={styles.card}>
                            <Card.Img className={styles.CardImg} variant="top" src={SecurityPic} />
                            <Card.Body>

                                <Card.Title className={styles.CardTitle}>امنیت</Card.Title>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col md={2}>
                        <Card className={styles.card}>
                            <Card.Img className={styles.CardImg} variant="top" src={ShabakePic} />
                            <Card.Body>

                                <Card.Title className={styles.CardTitle}>شبکه</Card.Title>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col md={2}>
                        <Card className={styles.card}>
                            <Card.Img className={styles.CardImg} variant="top" src={ItPic} />
                            <Card.Body>

                                <Card.Title className={styles.CardTitle}>آی تی</Card.Title>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col md={2}>
                        <Card className={styles.card}>
                            <Card.Img className={styles.CardImg} variant="top" src={WebPic} />
                            <Card.Body>

                                <Card.Title className={styles.CardTitle}>وب</Card.Title>

                            </Card.Body>

                        </Card>

                    </Col>


                </Row>
            </Container>
        </section>

    );
}
export default Groups;