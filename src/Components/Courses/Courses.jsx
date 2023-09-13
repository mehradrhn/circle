import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Courses.module.css';
import HtmlCoursePic from '../../Asset/Pic/HtmlCourse.png';
import ReactCoursePic from '../../Asset/Pic/ReactCourse.png';
import AngularCoursePic from '../../Asset/Pic/AngularCourse.png';
import CssCoursePic from '../../Asset/Pic/CssCourse.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Courses() {
  return (
    <section>
      <Container className={styles.holder}>

        <p className={styles.LearningCourses}>دوره های آموزشی</p>
        <Row>
          <Col md={3}>
            <Card className={`${styles.card} shadow p-3 mb-5 bg-body rounded `}>
              <div className={styles.CoursesBack}>
                <Card.Img className={`${styles.CardImg}`} variant="top" src={CssCoursePic} alt="CssCourse" />
              </div>

              <Card.Body>
                <Card.Title className={styles.CardTitle}>دوره آموزش جامع انگولار</Card.Title>
                <Card.Text className={styles.CardText}>
                  مدرس : آرمین ساکت
                </Card.Text>
                <Button className={styles.btn}><p>ثبت دوره</p></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className={`${styles.card} shadow p-3 mb-5 bg-body rounded `}>
              <div className={styles.CoursesBack}>
                <Card.Img className={`${styles.CardImg}`} variant="top" src={AngularCoursePic} alt="AngularCourse" />
              </div>
              <Card.Body>
                <Card.Title className={styles.CardTitle}>دوره آموزش جامع انگولار</Card.Title>
                <Card.Text className={styles.CardText}>
                  مدرس : آرمین ساکت
                </Card.Text>
                <Button className={styles.btn}><p>ثبت دوره</p></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className={`${styles.card} shadow p-3 mb-5 bg-body rounded `}>
              <div className={styles.CoursesBack}>
                <Card.Img className={`${styles.CardImg}`} variant="top" src={ReactCoursePic} alt="ReactCourse" />
              </div>
              <Card.Body>
                <Card.Title className={styles.CardTitle}>دوره آموزش جامع انگولار</Card.Title>
                <Card.Text className={styles.CardText}>
                  مدرس : آرمین ساکت
                </Card.Text>
                <Button className={styles.btn}><p>ثبت دوره</p></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className={`${styles.card} shadow p-3 mb-5 bg-body rounded `}>
              <div className={styles.CoursesBack}>
                <Card.Img className={`${styles.CardImg}`} variant="top" src={HtmlCoursePic} alt="HtmlCourse" />
              </div>
              <Card.Body>
                <Card.Title className={styles.CardTitle}>دوره آموزش جامع انگولار</Card.Title>
                <Card.Text className={styles.CardText}>
                  مدرس : آرمین ساکت
                </Card.Text>
                <Button className={styles.btn}><p>ثبت دوره</p></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <button className={styles.btnOtherCourses}><p>مشاهده دوره ها</p></button>
      </Container>

    </section>

  );
}

export default Courses;