import Card from 'react-bootstrap/Card';
import styles from './Teachers.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OstadBahr from '../../Asset/Pic/ostadBahr.png';


function Teachers() {
  return (
    <section>

      <Container>
        <p className={styles.BestTeachers}>اساتید برتر</p>
        <Row>
          <Col md={4}>
            <Card className={styles.card}>
              <Card.Img className={styles.CardImage} variant="top" src={OstadBahr} />
              <Card.Body>
                <Card.Title className={styles.CardTitle}> دکتر محمد حسین بحرالعلو </Card.Title>
                <p className={styles.Duty}>ریکت</p>
                <Card.Text className={styles.CardText}>
                  مدرس دانشگاه علم و صنعت بهشهر، مدرس
                  پژوهشگاه سپهر و مدرس دوره های وب
                  مستقر در ساری
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className={styles.card}>
              <Card.Img className={styles.CardImage} variant="top" src={OstadBahr} />
              <Card.Body>
                <Card.Title className={styles.CardTitle}> دکتر محمد حسین بحرالعلوم </Card.Title>
                <p className={styles.Duty}>فرانت</p>
                <Card.Text className={styles.CardText}>
                  مدرس دانشگاه علم و صنعت بهشهر، مدرس
                  پژوهشگاه سپهر و مدرس دوره های وب
                  مستقر در ساری
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className={styles.card}>
              <Card.Img className={styles.CardImage} variant="top" src={OstadBahr} />
              <Card.Body>
                <Card.Title className={styles.CardTitle}>دکتر محمد حسین بحرالعلوم</Card.Title>
                <p className={styles.Duty}>مدیریت</p>
                <Card.Text className={styles.CardText}>
                  مدرس دانشگاه علم و صنعت بهشهر، مدرس
                  پژوهشگاه سپهر و مدرس دوره های وب
                  مستقر در ساری
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

  );
}

export default Teachers;