import 'bootstrap/dist/css/bootstrap.min.css';
import CoursesIntroPic from '../../Asset/Pic/Courses.png';
import styles from './LearningCourses.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SearchIconCourses from '../../Asset/Pic/SearchIconCourses.png';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPic from '../../Asset/Pic/ReactPic.png';
import AngularPic from '../../Asset/Pic/AngularPic.png';
import HtmlPic from '../../Asset/Pic/HtmlPic.png';
import CssPic from '../../Asset/Pic/CssPic.png';

function LearningCourses() {

    return (

            <Container className={styles.holder}>
            <img
                    src={CoursesIntroPic}
                    className={styles.CoursesIntroImg}
                    alt="CoursesIntroPic" />

                <p className={styles.LearningPackages}>
                    دوره های آموزشی
                </p>
                <Form className={styles.SearchCourses}>
                    <Form.Control className={styles.InputSearch}
                        placeholder="جستجوی دوره..." />
                    <Button className={styles.SearchBtn}>
                        <img className={styles.SearchIcon}
                            src={SearchIconCourses} /> </Button>
                </Form>
            <Row>
                <Col md={6}>
                    <Card className={styles.card}>
                        <div className={styles.CoursesBackground}>
                            <Card.Img className={styles.CardImg} variant="top" src={AngularPic} />
                        </div>

                        <Card.Body className={styles.CardBody}>
                            <Card.Title className={styles.CardTitle}>دوره آموزش جامع ریکت</Card.Title>
                            <Card.Text className={styles.CardText}>
                                مدرس : استاد بحرالعلوم
                            </Card.Text>
                            <Card.Text className={styles.CardText}>
                                تاریخ شروع : 1401/04/10
                            </Card.Text>
                            <Button className={styles.CardBtn}><p>ثبت دوره</p></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className={styles.card}>
                        <div className={styles.CoursesBackground}>
                            <Card.Img className={styles.CardImg} variant="top" src={ReactPic} />
                        </div>

                        <Card.Body className={styles.CardBody}>
                            <Card.Title className={styles.CardTitle}>دوره آموزش جامع ریکت</Card.Title>
                            <Card.Text className={styles.CardText}>
                                مدرس : استاد بحرالعلوم
                            </Card.Text>
                            <Card.Text className={styles.CardText}>
                                تاریخ شروع : 1401/04/10
                            </Card.Text>
                            <Button className={styles.CardBtn}><p>ثبت دوره</p></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className={styles.card}>
                        <div className={styles.CoursesBackground}>
                            <Card.Img className={styles.CardImg} variant="top" src={CssPic} />
                        </div>

                        <Card.Body className={styles.CardBody}>
                            <Card.Title className={styles.CardTitle}>دوره آموزش جامع ریکت</Card.Title>
                            <Card.Text className={styles.CardText}>
                                مدرس : استاد بحرالعلوم
                            </Card.Text>
                            <Card.Text className={styles.CardText}>
                                تاریخ شروع : 1401/04/10
                            </Card.Text>
                            <Button className={styles.CardBtn}><p>ثبت دوره</p></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className={styles.card}>
                        <div className={styles.CoursesBackground}>
                            <Card.Img className={styles.CardImg} variant="top" src={HtmlPic} />
                        </div>

                        <Card.Body className={styles.CardBody}>
                            <Card.Title className={styles.CardTitle}>دوره آموزش جامع ریکت</Card.Title>
                            <Card.Text className={styles.CardText}>
                                مدرس : استاد بحرالعلوم
                            </Card.Text>
                            <Card.Text className={styles.CardText}>
                                تاریخ شروع : 1401/04/10
                            </Card.Text>
                            <Button className={styles.CardBtn}><p>ثبت دوره</p></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className={styles.card}>
                        <div className={styles.CoursesBackground}>
                            <Card.Img className={styles.CardImg} variant="top" src={AngularPic} />
                        </div>

                        <Card.Body className={styles.CardBody}>
                            <Card.Title className={styles.CardTitle}>دوره آموزش جامع ریکت</Card.Title>
                            <Card.Text className={styles.CardText}>
                                مدرس : استاد بحرالعلوم
                            </Card.Text>
                            <Card.Text className={styles.CardText}>
                                تاریخ شروع : 1401/04/10
                            </Card.Text>
                            <Button className={styles.CardBtn}><p>ثبت دوره</p></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className={styles.card}>
                        <div className={styles.CoursesBackground}>
                            <Card.Img className={styles.CardImg} variant="top" src={ReactPic} />
                        </div>

                        <Card.Body className={styles.CardBody}>
                            <Card.Title className={styles.CardTitle}>دوره آموزش جامع ریکت</Card.Title>
                            <Card.Text className={styles.CardText}>
                                مدرس : استاد بحرالعلوم
                            </Card.Text>
                            <Card.Text className={styles.CardText}>
                                تاریخ شروع : 1401/04/10
                            </Card.Text>
                            <Button className={styles.CardBtn}><p>ثبت دوره</p></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className={styles.card}>
                        <div className={styles.CoursesBackground}>
                            <Card.Img className={styles.CardImg} variant="top" src={CssPic} />
                        </div>

                        <Card.Body className={styles.CardBody}>
                            <Card.Title className={styles.CardTitle}>دوره آموزش جامع ریکت</Card.Title>
                            <Card.Text className={styles.CardText}>
                                مدرس : استاد بحرالعلوم
                            </Card.Text>
                            <Card.Text className={styles.CardText}>
                                تاریخ شروع : 1401/04/10
                            </Card.Text>
                            <Button className={styles.CardBtn}><p>ثبت دوره</p></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className={styles.card}>
                        <div className={styles.CoursesBackground}>
                            <Card.Img className={styles.CardImg} variant="top" src={HtmlPic} />
                        </div>

                        <Card.Body className={styles.CardBody}>
                            <Card.Title className={styles.CardTitle}>دوره آموزش جامع ریکت</Card.Title>
                            <Card.Text className={styles.CardText}>
                                مدرس : استاد بحرالعلوم
                            </Card.Text>
                            <Card.Text className={styles.CardText}>
                                تاریخ شروع : 1401/04/10
                            </Card.Text>
                            <Button className={styles.CardBtn}><p>ثبت دوره</p></Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <button className={styles.BtnMoreCourses}><p>بیشتر</p></button>
        </Container>


    );
}

export default LearningCourses;