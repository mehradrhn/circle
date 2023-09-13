import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AdminPic from '../../Asset/Pic/admin.jpg';
import DashPic from '../../Asset/Pic/dash.png';
import CoursePic from '../../Asset/Pic/course.png';
import ProfilePic from '../../Asset/Pic/profile.png';
import ReactLogo from '../../Asset/Pic/react.png';
import AngularLogo from '../../Asset/Pic/angular.png';
import HtmlLogo from '../../Asset/Pic/html.png';
import CssLogo from '../../Asset/Pic/css.png';
import SearchLogo from '../../Asset/Pic/search.png'; 


import styles from '../PanelCourse/PanelCourse.module.css';

function PanelCourse() {
    return (
        <Container className={styles.holder} fluid>

            <Row>

                <Col md={8} className={styles.leftBox}>

                <p className={styles.title}> دوره های من </p>

                    <Form className={styles.searchBox} dir='rtl'>
                        <Form.Control
                            type="search"
                            placeholder=" جستجوی دوره "
                            className={styles.search}
                            aria-label=" search "
                        />
                        <Button className={styles.searchB}>
                            <img

                            className={styles.searchPic}
                            src={SearchLogo}
                            />
                        </Button>
                    </Form>

                   

                    <Table striped dir='rtl' className={styles.table} >
                        <thead className={styles.head}>
                            <tr>
                                <th> تصویر </th>
                                <th> نام دوره </th>
                                <th> مدرس </th>
                                <th> نام ترم </th>
                                <th> تاریخ شروع </th>
                                <th> قیمت </th>
                            </tr>
                        </thead>
                        <tbody className={styles.body}>
                            <tr>
                                <td>
                                    <img
                                        src={ReactLogo}
                                        className={styles.tablePic} />
                                </td>
                                <td> دوره ری اکت </td>
                                <td> دکتر بحر العلومی </td>
                                <td> پاییز </td>
                                <td> 1401/6/3 </td>
                                <td> 250/000 تومان </td>

                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src={AngularLogo}
                                        className={styles.tablePic} />
                                </td>
                                <td> دوره ری اکت </td>
                                <td> دکتر بحر العلومی </td>
                                <td> پاییز </td>
                                <td> 1401/6/3 </td>
                                <td> 250/000 تومان </td>
                            </tr>

                            <tr>
                                <td>
                                    <img
                                        src={HtmlLogo}
                                        className={styles.tablePic} />
                                </td>
                                <td> دوره ری اکت </td>
                                <td> دکتر بحر العلومی </td>
                                <td> پاییز </td>
                                <td> 1401/6/3 </td>
                                <td> 250/000 تومان </td>
                            </tr>

                            <tr>
                                <td>
                                    <img
                                        src={CssLogo}
                                        className={styles.tablePic} />
                                </td>
                                <td> دوره ری اکت </td>
                                <td> دکتر بحر العلومی </td>
                                <td> پاییز </td>
                                <td> 1401/6/3 </td>
                                <td> 250/000 تومان </td>

                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src={ReactLogo}
                                        className={styles.tablePic} />
                                </td>
                                <td> دوره ری اکت </td>
                                <td> دکتر بحر العلومی </td>
                                <td> پاییز </td>
                                <td> 1401/6/3 </td>
                                <td> 250/000 تومان </td>
                            </tr>
                        </tbody>
                    </Table>



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
                        <li className={styles.lis} > داشبورد
                            <img
                                src={DashPic}
                                className={styles.liPic}
                            />
                        </li>
                        <li className={styles.lis} > دوره ها
                            <img
                                src={CoursePic}
                                className={styles.liPic}
                            />
                        </li>
                        <li className={styles.lis}> ویرایش پروفایل
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

export default PanelCourse;