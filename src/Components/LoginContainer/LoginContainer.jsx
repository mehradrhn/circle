import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Forms from '../Forms/Forms';
import LoginPic from '../../Asset/Pic/Login.png';

import styles from '../LoginContainer/LoginContainer.module.css';

function LoginContainer() {
    return (
        <Container className={styles.holder} fluid>

            <div class={styles.box}>

                <p className={styles.title}>  ورود کاربر </p>

                <Row className={styles.mainRow}>

                    <Col md={8}>
                        <Row className={styles.formRow}>
                            
                            <Col md={8}>

                                <Forms
                                    name="ایمیل"
                                />


                            </Col>

                            <Col md={8}  >

                                <Forms
                                    name="پسورد"
                                />


                            </Col>

                            <Col md={12} className={styles.buttonHolder}>



                                <Button className={styles.buttons}> ثبت نام </Button>
                                <Button className={styles.buttons} > ورود </Button>





                            </Col>

                        </Row>

                    </Col>

                    <Col md={4}>
                        <img
                        className={styles.LoginPic}
                        src={LoginPic}
                        />
                       

                    </Col>
                </Row>

            </div>
        </Container>
    );
}

export default LoginContainer;