import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Forms from '../Forms/Forms';
import Form from 'react-bootstrap/Form';
import AdminPic from '../../Asset/Pic/admin.jpg';
import DashPic from '../../Asset/Pic/dash.png';
import CoursePic from '../../Asset/Pic/course.png';
import ProfilePic from '../../Asset/Pic/profile.png';

import styles from '../Account/Account.module.css';

function Account() {
    return (
        <Container className={styles.holder} fluid>
            <Row>
                <Col md={8} className={styles.leftBox}>

                    <Row className={styles.leftRow}>
                       <span className={styles.title}> حساب کاربری </span>
                        <Row className={styles.firstRow}>

                            <Col md={6}>

                                <Forms
                                    name="نام"
                                    text="مهراد"

                                />

                            </Col>

                            <Col md={6}>

                                <Forms
                                    name=" نام خانوادگی "
                                    text="روحانی"

                                />

                            </Col>

                        </Row>

                        <Row className={styles.secondRow}>

                            <Col md={4}>

                                <Forms
                                    name=" سال تولد "
                                    text="1382"

                                />

                            </Col>

                            <Col md={4}>

                                <Forms
                                    name=" شغل "
                                    text="آزاد"

                                />

                            </Col>

                            <Col md={4}>

                                <Forms
                                    name=" شهر "
                                    text="ساری"

                                />

                            </Col>

                        </Row>

                        <Row className={styles.thirdRow}>

                            <Col md={6}>

                                <Forms
                                    name=" ایمیل "
                                    text="Email@example.com"

                                />

                            </Col>

                            <Col md={6}>

                                <Forms
                                    name=" آدرس "
                                    text="ساری"

                                />

                            </Col>


                        </Row>

                        <Row className={styles.forthRow}>

                            <Col md={12} >


                                <Form className={styles.box}>
                                    <p> توضیحات </p>
                                    <Form.Control
                                        type=""
                                        placeholder=" "
                                        className={styles.text}
                                        aria-label="Search"
                                    />
                                </Form>

                            </Col>


                        </Row>
                        <Row>
                            <Col md={12} className={styles.buttonHolder}>



                                <Button className={styles.sign}> ثبت  </Button>
                                <Button className={styles.delete} > حذف </Button>





                            </Col>
                        </Row>

                    </Row>

                <p className={styles.back}> بازگشت </p>

                </Col>

               

                <Col md={4} className={styles.rightBox}>
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

export default Account;