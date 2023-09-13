import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminPic from '../../Asset/Pic/admin.jpg';
import DashPic from '../../Asset/Pic/dash.png';
import CoursePic from '../../Asset/Pic/course.png';
import ProfilePic from '../../Asset/Pic/profile.png';
import Buy from '../../Asset/Pic/buy.png';
import MyCards from '../MyCards/MyCards';

import styles from '../DashBoard/DashBoard.module.css';

function DashBoard() {

    return (

        <Container className={styles.holder} fluid>
            <Row>
                <Col sm={8} className={styles.leftBox}>

                    <p className={styles.title}> داشبورد </p>

                    <Row className={styles.firstRow}>
                        <Col sm={4} className={styles.cardHolder}>
                            <MyCards
                                img={Buy}
                                text=" سه دوره خریداری شده "
                            />

                        </Col>

                        <Col sm={4} className={styles.cardHolder}>
                            <MyCards
                                img={Buy}
                                text=" سه دوره خریداری شده "
                            />

                        </Col>

                        <Col sm={4} className={styles.cardHolder}>
                            <MyCards
                                img={Buy}
                                text=" سه دوره خریداری شده "
                            />

                        </Col>

                    </Row>

                    <Row className={styles.secondRow}>
                        <Col sm={4}>
                            <MyCards
                                img={Buy}
                                text=" سه دوره خریداری شده "
                            />

                        </Col>

                        <Col sm={4}>
                            <MyCards
                                img={Buy}
                                text=" سه دوره خریداری شده "
                            />

                        </Col>

                        <Col sm={4}>
                            <MyCards
                                img={Buy}
                                text=" سه دوره خریداری شده "
                            />

                        </Col>

                    </Row>


                </Col>



                <Col sm={4} className={styles.rightBox}>
                    <div className={styles.circle}>
                        <img
                            src={AdminPic}
                            className={styles.admin}
                        />

                        <p className={styles.adminText}> مهراد روحانی </p>
                        <p className={styles.work}> ادمین </p>

                    </div>
                    <ul>
                        <li> داشبورد
                            <img
                                src={DashPic}
                                className={styles.liPic}
                            />
                        </li>
                        <li> دوره ها
                            <img
                                src={CoursePic}
                                className={styles.liPic}
                            />
                        </li>
                        <li> ویرایش پروفایل
                            <img
                                src={ProfilePic}
                                className={styles.liPic}
                            />
                        </li>
                    </ul>
                </Col>
            </Row>

        </Container>
    );
}

export default DashBoard;